import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import { View, ScrollView, Text } from 'react-native';
import MediInfo from '../../components/atoms/MediInfo';
import Moment from 'moment';
import {getAlarmlist} from '../../utils/axios';
import Spinner from 'react-native-loading-spinner-overlay';

const Alarm = (props) => {
    const [alarmList, setAlarmList] = useState([]);
    const [isVisible, setIsvisible] = useState();
    const gettingList = async()=>{
        setIsvisible(true);
        let day = Moment().format('YYYY-MM-DD');
        if(props.route.params){
            day = props.route.params.day;
        }
        const result = await getAlarmlist(day);
        setIsvisible(false);
        setAlarmList(result);
    }

    useFocusEffect(
        useCallback(()=>{
            gettingList();
        }, [props])
    );

    const listInfo = ()=>{
        let result = [];
        if(alarmList.length>0){
            alarmList.map(item=>{
                result = result.concat(
                    <MediInfo naviagtion = {props.navigation} func={(alarmId)=>props.navigation.navigate('AlarmInfo',{data:alarmId})} alarmTitle={item.alarmTitle} alarmId={item.alarmId} alarmDayStart={item.alarmDayStart} alarmDayEnd = {item.alarmDayEnd}/>
                );
            })
        }
        return result;
    }

    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            <Spinner visible={isVisible} />
            {alarmList.length>0?(
                <ScrollView style={{ width:'100%', margin:10}} contentContainerStyle={{alignItems: 'center'}}>
                    {listInfo()}
                </ScrollView>
            ):(
                <View style={{ flex: 1, alignItems: 'center', justifyContent:'center' }}>
                    <Text style={{fontSize:25, color:'gray'}}>등록된 알람이 없습니다.</Text>
                </View>
            )}
        </View>
    );
};
export default Alarm;