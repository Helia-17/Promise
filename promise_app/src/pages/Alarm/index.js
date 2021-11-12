import React, {useState, useEffect} from 'react';
import { View, ScrollView, Text } from 'react-native';
import MediInfo from '../../components/atoms/MediInfo';
import Moment from 'moment';
import {getAlarmlist} from '../../utils/axios';

const Alarm = (props) => {
    const [alarmList, setAlarmList] = useState([]);
    const gettingList = async()=>{
        let day = Moment().format('YYYY-MM-DD');
        if(props.route.params){
            day = props.route.params.day;
        }
        const result = await getAlarmlist(day);
        setAlarmList(result);
    }

    useEffect(()=>{
        gettingList();
    },[props]);

    const listInfo = ()=>{
        let result = [];
        if(alarmList.length>0){
            alarmList.map(item=>{
                result = result.concat(
                    <MediInfo alarmTitle={item.alarmTitle} alarmId={item.alarmId}  alarmDayStart={item.alarmDayStart} alarmDayEnd = {item.alarmDayEnd}/>
                );
            })
        }
        return result;
    }

    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
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