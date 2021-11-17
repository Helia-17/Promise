import React, {useState, useCallback } from 'react';
import {useFocusEffect} from '@react-navigation/native';
import { View,Dimensions, Alert } from 'react-native';
import Carousel from '../../components/Carousel';
import {myinfo, sharingList, sharingAccept, sharingReject, getAlarmDetail} from '../../utils/axios';
import Spinner from 'react-native-loading-spinner-overlay';
import { getMyInfoAction } from '../../modules/user/actions';
import Notifications from '../../utils/Notifications';
import Moment from 'moment';
import { useDispatch } from 'react-redux';

const screenWidth = Math.round(Dimensions.get('window').width);
const PAGES = [1];

const HomePage = ({navigation}) => {
    const [spinVisible, setSpinvisible] = useState();
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState({});

    const checkSharing = async()=>{
        setSpinvisible(true);
        const shareList = await sharingList();
        if(shareList.length>0){
            shareList.map(item=>{
                Alert.alert(
                    '알람 공유 요청',
                    `${item.userNickname}님의 알람 공유를 수락하시겠습니까?`,
                    [
                        {
                            text:'예',
                            onPress: ()=>acceptSharing(item.alarmId)
                        },
                        {
                            text:'아니요',
                            onPress: ()=>rejectSharing(item.alarmId)
                        }
                    ]
                )
            })
        }
        setSpinvisible(false);
    }

    const acceptSharing = async (id) => {
        const result = await sharingAccept(id);
        if(result===200){
            const alarmdata = await getAlarmDetail(id);
            setNotification(id, alarmdata.alarmTitle, alarmdata.alarmMediList, alarmdata.alarmDayStart, alarmdata.alarmDayEnd, alarmdata.alarmTime1, alarmdata.alarmTime2, alarmdata.alarmTime3);
        }
    }
    
    const setNotification = async(alarmId, title, pillList, myStartDate, myendDate, selectTime1, selectTime2, selectTime3)=>{
        Moment.locale('kr');
        let nowTime = Moment().toDate();
        let cur = Moment(myStartDate).toDate();
        let end = Moment(myendDate).toDate();
        let hour = [];
        let minute = [];
        if(selectTime1){
          hour.push(selectTime1.substring(0,2));
          minute.push(selectTime1.substring(2,4));
        }
        if(selectTime2){
          hour.push(selectTime2.substring(0,2));
          minute.push(selectTime2.substring(2,4));
        }
        if(selectTime3){
          hour.push(selectTime3.substring(0,2));
          minute.push(selectTime3.substring(2,4));
        }
        let listSize = hour.length;
    
        end.setHours(Number(hour[listSize-1]));
        end.setMinutes(Number(minute[listSize-1]));
        end.setSeconds(0);
    
        cur.setSeconds(0);
        let medi = pillList.join(', ');
        let id = 1;
        let registerId = '';
        while (cur<=end){
          for(let idx = 0; idx<listSize; idx++){
            cur.setHours(Number(hour[idx]));
            cur.setMinutes(Number(minute[idx]));
    
            if (cur<nowTime){
              continue;
            }
    
            registerId = `${alarmId}${id}`;
            Notifications.scheduledLocalNotifications(alarmId, registerId, cur, title, medi);
            id ++;
          }
          cur = Moment(cur).add(1, 'd').toDate();
        }
    }

    const rejectSharing = async (id) => {
        await sharingReject(id);
    }

    const getMyInfo = ()=>{
        return myinfo()
        .then(res => {
            if(res.statusCode === 420) navigation.replace('LoginScreen');
            else{
                setUserInfo(res);
                dispatch(getMyInfoAction(res));
            }
        })
    }

    useFocusEffect(
        useCallback(()=>{
            checkSharing();
            getMyInfo();
            return () => {
                setUserInfo({})
            }
        }, [])
    );    

    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#F9F9F9' }}>
            <Spinner visible={spinVisible} />
            <Carousel
            gap={0}
            offset={0}
            pages={PAGES}
            pageWidth={screenWidth}
            />
        </View>
    );
};
export default HomePage;