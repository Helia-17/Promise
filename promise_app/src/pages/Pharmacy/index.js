import React, {useState, useLayoutEffect} from 'react';
import { View, Platform, PermissionsAndroid, ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Geolocation from 'react-native-geolocation-service';
import PhamacyInfo from '../../components/PhamacyInfo';
import {GOOGLE_GEO_API} from '../../utils/oauth';

const Pharmacy = () => {
    const [location, setLocation] = useState({latitude:37.2777764, longitude:127.0170466, error:null});
    const [si, setSi] = useState('');
    const [gun, setGun] = useState('');

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

    async function findAddress(){
        const res = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${GOOGLE_GEO_API}&language=ko`,
          );
        const resJson = await res.json();
        const addressArr = resJson.results[0].formatted_address.split(' ');
        setSi(addressArr[1]);
        setGun(addressArr[2]);

        console.log(resJson.results[0].formatted_address.split(' '));
    }

    useLayoutEffect(()=>{
        requestPermission().then(result=>{
            console.log({result});
            if (result === 'granted'){
                Geolocation.getCurrentPosition(
                    (posistion)=>{
                        setLocation({latitude:posistion.coords.latitude, longitude:posistion.coords.longitude, error:null});
                        console.log(posistion.coords);
                    },
                    (error)=>{
                        setLocation({error:error.message});
                        console.log(error);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout:3600,
                        maximumAge:3600,
                    },
                );
            }
        });
        findAddress();
    },[]);

    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            {location&&location.error?null:(
            <MapView style={{ position: 'absolute', top:0, left:0, right:0, bottom:0, height:'70%' }} provider={PROVIDER_GOOGLE} initialRegion={{ latitude: location.latitude, longitude: location.longitude , latitudeDelta: 0.005, longitudeDelta: 0.005, }} >
                <Marker coordinate={{latitude:37.277873, longitude:127.017078}} title='00약국'/>
            </MapView>
            )}
            <View style={{position: 'absolute',bottom:0, height:'30%', width:'100%', alignItems:'center'}}>
                <ScrollView style={{width: '90%', margin:5}}>
                    <PhamacyInfo name='00약국' location='경기도 수원시 장안구 00동 00-00' tel='031-111-1111'/>
                    <PhamacyInfo name='00약국' location='경기도 수원시 장안구 00동 00-00' tel='031-111-1111'/>
                    <PhamacyInfo name='00약국' location='경기도 수원시 장안구 00동 00-00' tel='031-111-1111'/>
                </ScrollView>
            </View>
        </View>
    );
};
export default Pharmacy;