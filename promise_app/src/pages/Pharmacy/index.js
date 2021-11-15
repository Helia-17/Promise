import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import { View, Platform, PermissionsAndroid, ScrollView, Text } from 'react-native';
import MapView, {  Marker } from "react-native-maps";
import Geolocation from 'react-native-geolocation-service';
import PhamacyInfo from '../../components/PhamacyInfo';
import { getPharmacyAPI } from '../../utils/axios';
import Spinner from 'react-native-loading-spinner-overlay';

const Pharmacy = () => {

    const [pharmacyList, setPharmacyList] = useState([]);
    const [region, setRegion] = useState();
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [isPharmList, setIsPharmList] = useState(true);
    const [isVisible, setIsvisible] = useState();

    async function requestPermission(){
        try{
            if (Platform.OS === 'android'){
                return await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                );
            }
            if (Platform.OS === 'ios'){
                return await Geolocation.requestAuthorization('always');
            }
        }catch(e){
        }
    }

    const getPharmacyList = async (data) => {
        setIsvisible(true);
        var now = new Date();
        var week = now.getDay();
        var hours = '';
        var minutes = '';

        if (now.getHours().toString() < 10) {
            hours = '0' + now.getHours().toString();
        } else {
            hours = now.getHours().toString();
        }

        if (now.getMinutes().toString() < 10) {
            minutes = '0' + now.getMinutes().toString();
        } else {
            minutes = now.getMinutes().toString();
        }
        
        var curTime = hours + minutes;
        
        const res = await getPharmacyAPI(data.lat, data.lon, week, curTime);
        if (res === 400) {
            setPharmacyList([]);
        } else {
            setPharmacyList(res);
        }
        setIsvisible(false);
    }

    useFocusEffect(
        useCallback(()=>{
            requestPermission().then(result=>{
                if (result === 'granted'){
                    Geolocation.getCurrentPosition(
                        (posistion)=>{
                            setRegion({ latitude: posistion.coords.latitude, longitude: posistion.coords.longitude, latitudeDelta: 0.015, longitudeDelta: 0.015 });
                            setLatitude(posistion.coords.latitude);
                            setLongitude(posistion.coords.longitude);
                            getPharmacyList({ lat:posistion.coords.latitude, lon:posistion.coords.longitude });
                        },
                        (error)=>{
                        },
                        {
                            enableHighAccuracy: true,
                            timeout:3600,
                            maximumAge:3600,
                        },
                    );
                }
            });
        }, [])
    );
    
    
    const pharmList = ()=>{
        let result = [];
        if(pharmacyList){
            pharmacyList.map(item => {
                var distance = item.distance;

                if (distance >= 1000) {
                    distance = ((distance * 0.001).toFixed(2)).toString();
                    distance = distance.replace(/0$/, "") + 'km';
                } else {
                    distance = distance.toString() + 'm';
                }

                result = result.concat(
                    <PhamacyInfo
                        name={item.pharmName}
                        location={item.pharmAddr}
                        tel={item.pharmTel}
                        dist={distance}
                        lat={item.pharmLat}
                        long={item.pharmLong}
                    />
                )
            })
        } else {
            setIsPharmList(false);
        }
        return result;
    }

    const pharmLatLong = () => {
        let result = [];
        if(pharmacyList){
            pharmacyList.map(item=>{
                result = result.concat(
                    <Marker
                        coordinate={{ latitude: item.pharmLat, longitude: item.pharmLong }}
                        title={item.pharmName}
                    />
                )
            })
        }
        return result;
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            <Spinner visible={isVisible} />
            {region?(
                <MapView style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, height: '70%' }}
                    showsUserLocation={true}
                    initialRegion={region}
                    >
                    {pharmLatLong()}
                </MapView>
            ):null}
            <View style={{position: 'absolute',bottom:0, height:'30%', width:'100%', alignItems:'center'}}>
                {isPharmList.length>0 ? (
                    <ScrollView style={{ width: '95%', margin: 5 }}>
                        {pharmList()}
                    </ScrollView>
                ) : (
                        <View style={{ width: '95%', height: '100%',margin: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{fontSize:20, color:'#BBBBBB'}}>현재 위치 주변에 연 약국이 없습니다</Text>
                        </View>
                )}
                
            </View>
        </View>
    );
};
export default Pharmacy;