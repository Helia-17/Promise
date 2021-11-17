import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import { View, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import DetailList from '../../components/atoms/DetailList';
import Moment from 'moment';
import {getAlarmDetail} from '../../utils/axios';
import Spinner from 'react-native-loading-spinner-overlay';

const TimelineDetail = (props) => {
    const [title, onChangeTitle] = useState('');
    const [isOn, setIsOn] = useState(false);
    const [pillList, setPillList] = useState([]);
    const [tag, setTag] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectTime1, setSelectTime1] = useState(null);
    const [selectTime2, setSelectTime2] = useState(null);
    const [selectTime3, setSelectTime3] = useState(null);
    const [spinVisible, setSpinvisible] = useState();

    const getDetail = async(id)=>{
        setSpinvisible(true);
        const result = await getAlarmDetail(id);
        onChangeTitle(result.alarmTitle);
        setPillList(result.alarmMediList);
        setStartDate(result.alarmDayStart);
        setEndDate(result.alarmDayEnd);
        setTag(result.tagList);
        setSelectTime1(result.alarmTime1);
        setSelectTime2(result.alarmTime2);
        setSelectTime3(result.alarmTime3);
        if(result.alarmYN===1) setIsOn(true);
        else setIsOn(false);
        setSpinvisible(false);
    }

    useFocusEffect(
        useCallback(() => {
            getDetail(props.route.params.data);
        }, [])
    );

    const getMediList = ()=>{
        let result = [];
        if(pillList.length>0){
            pillList.map(item=>{
                result = result.concat(
                    <DetailList name={item}/>
                )
            })
        }
        return result;
    }

    const getTagList = () =>{
        let result = '';
        if(tag.length > 0){
            tag.map(item=>{
                result = result + `#${item} `;
            })
        }else{
            result = '등록한 태그가 없습니다.'
        }
        return result;
    }

    const getTimeList = ()=>{
        let result = [];
        if(selectTime1){
            result = result.concat(
                <DetailList name={Moment(selectTime1).format('hh:mm')}/>
            )
        }
        if(selectTime2){
            result = result.concat(
                <DetailList name={Moment(selectTime2).format('hh:mm')}/>
            )
        }
        if(selectTime3){
            result = result.concat(
                <DetailList name={Moment(selectTime3).format('hh:mm')}/>
            )
        }
        return result;
    }

    return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
            <Spinner visible={spinVisible} />
            <View style={{width: '90%', alignItems: 'flex-start', marginTop: 10}}>
            <Icon.Button name="left" color="black" backgroundColor="white" size={25} onPress={() => props.navigation.goBack()} />
            </View>
            <ScrollView style={{width: '100%', margin: 10}} contentContainerStyle={{alignItems: 'center', margin: 10}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'center', height: 50 }}>
                    <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', width: '20%' }}>복용명</Text>
                    <View style={{ width: '78%', backgroundColor: '#e4ecf3', height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ width: '80%', color: '#363636', backgroundColor: '#e4ecf3', borderRadius: 20, textAlign: 'center' }}>{title}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'center', height: 50 }}>
                    <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', width: '20%' }}>기간</Text>
                    <View style={{ flexDirection:'row', width: '78%', backgroundColor: '#e4ecf3', height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ width: '35%', color: '#363636', backgroundColor: '#e4ecf3', borderRadius: 20, textAlign: 'center' }}>{startDate}</Text>
                        <Text style={{color:'#363636'}}>~</Text>
                        <Text style={{ width: '35%', color: '#363636', backgroundColor: '#e4ecf3', borderRadius: 20, textAlign: 'center' }}>{endDate}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'center', height: 50 }}>
                    <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', width: '20%' }}>약 정보</Text>
                    <View style={{ width: '78%', height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ width: '80%', color: '#747474', textAlign: 'center' }}>복용한 약 목록입니다.</Text>
                    </View>
                </View>
                {getMediList()}
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'center', height: 50 }}>
                    <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', width: '20%' }}>태그</Text>
                    <View style={{ width: '78%', backgroundColor: '#e4ecf3', height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ width: '70%', color: '#363636', backgroundColor: '#e4ecf3', borderRadius: 20, textAlign: 'center' }}>{getTagList()}</Text>
                    </View>
                </View>
                {isOn ? (
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'center', height: 50 }}>
                            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', width: '20%' }}>알람</Text>
                            <View style={{ width: '78%', height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ width: '80%', color: '#747474', textAlign: 'center' }}>등록하신 알람입니다.</Text>
                            </View>
                        </View>
                        {getTimeList()}
                    </View>
                ) : null}
            </ScrollView>
        </View>
    );
};
export default TimelineDetail;
