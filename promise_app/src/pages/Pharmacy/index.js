import React, {useState, useLayoutEffect} from 'react';
import { View, Platform, PermissionsAndroid, ScrollView } from 'react-native';
import MapView, {  Marker } from "react-native-maps";
import Geolocation from 'react-native-geolocation-service';
import PhamacyInfo from '../../components/PhamacyInfo';
import { getPharmacyAPI } from '../../utils/axios';

const Pharmacy = () => {
    const [pharmacyList, setPharmacyList] = useState([]);

    const [region, setRegion] = useState();
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();

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
            console.log(e);
        }
    }

    const getPharmacyList = async (data) => {
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
        
        // var curTime = '1130';
        var curTime = hours + minutes;
        
        console.log("현재 : ", now);
        console.log("현재 week : ", week);
        console.log("현재 curTime : ", curTime);
        
        const res = await getPharmacyAPI(data.lat, data.lon, week, curTime);
        if (res === 400) {
            setPharmacyList([]);
        } else {
            setPharmacyList(res);
            console.log("res : ", res);
        }
    }

    useLayoutEffect(()=>{
        requestPermission().then(result=>{
            console.log({result});
            if (result === 'granted'){
                Geolocation.getCurrentPosition(
                    (posistion)=>{
                        setRegion({ latitude: posistion.coords.latitude, longitude: posistion.coords.longitude, latitudeDelta: 0.015, longitudeDelta: 0.015 });
                        setLatitude(posistion.coords.latitude);
                        setLongitude(posistion.coords.longitude);
                        getPharmacyList({ lat:posistion.coords.latitude, lon:posistion.coords.longitude });
                    },
                    (error)=>{
                        console.log(error.code, error.message);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout:3600,
                        maximumAge:3600,
                    },
                );
            }
        });
    },[]);
    
    const pharmList = ()=>{
        let result = [];
        if(pharmacyList){
            pharmacyList.map(item=>{
                result = result.concat(
                    <PhamacyInfo name={item.pharmName} location={item.pharmAddr} tel={item.pharmTel} />
                )
            })
        }
        return result;
    }

    const pharmLatLong = () => {
        let result = [];
        if(pharmacyList){
            pharmacyList.map(item=>{
                result = result.concat(
                    <Marker coordinate={{ latitude: item.pharmLat, longitude: item.pharmLong }} title={ item.pharmName }/>
                )
                console.log("Plist : ", item.pharmLat, item.pharmLong);
            })
        }
        return result;
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            {region?(
            <MapView style={{ position: 'absolute', top:0, left:0, right:0, bottom:0, height:'70%' }} showsUserLocation={true} initialRegion={region} >
                {pharmLatLong()}
            </MapView>
            ):null}
            <View style={{position: 'absolute',bottom:0, height:'30%', width:'100%', alignItems:'center'}}>
                <ScrollView style={{width: '90%', margin:5}}>
                    {pharmList()}
                </ScrollView>
            </View>
        </View>
    );
};
export default Pharmacy;