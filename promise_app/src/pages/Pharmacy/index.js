import React, {useState, useLayoutEffect} from 'react';
import { View, Platform, PermissionsAndroid, ScrollView } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import Geolocation from 'react-native-geolocation-service';
import PhamacyInfo from '../../components/PhamacyInfo';

const Pharmacy = () => {
    const [region, setRegion] = useState();

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

    useLayoutEffect(()=>{
        requestPermission().then(result=>{
            console.log({result});
            if (result === 'granted'){
                Geolocation.getCurrentPosition(
                    (posistion)=>{
                        setRegion({latitude:posistion.coords.latitude, longitude:posistion.coords.longitude,latitudeDelta: 0.005, longitudeDelta: 0.005});
                        console.log(posistion.coords.latitude, posistion.coords.longitude);
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

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            {region?(
            <MapView style={{ position: 'absolute', top:0, left:0, right:0, bottom:0, height:'70%' }} showsUserLocation={true} initialRegion={region} >
                <Marker coordinate={{latitude:37.277873, longitude:127.017078}} title='00약국'/>
            </MapView>
            ):null}
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