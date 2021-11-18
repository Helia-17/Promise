import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import { View } from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import RoundBtn from '../../components/atoms/RoundBtn';
import {getCalendar} from '../../utils/axios';
import Spinner from 'react-native-loading-spinner-overlay';
import Moment from 'moment';

const CalendarPage = ({navigation}) => {
    const [selectedMonth, setSelectedMonth] = useState(Moment().format('YYYY-MM'));
    const [resultList, setResultList] = useState([]);
    const [spinVisible, setSpinvisible] = useState();
    const nowDate = Moment().format('YYYY-MM-DD');
    const [markList, setMarkList] = useState({});

    LocaleConfig.locales['ko']={
        monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
        monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
        dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
        dayNamesShort: ['일', '월','화','수','목','금','토'],
        today: 'Aujourd\'hui'
    };
    LocaleConfig.defaultLocale = 'ko';
    
    const beforeColor = '#FF4D75';
    const futureColor = '#C4C4C4';

    const getList = async(nowMonth)=>{
        setSpinvisible(true);
        let result = [];
        if(nowMonth.dateString){
            result = await getCalendar(Moment(nowMonth.dateString).format('YYYY-MM'));
            setResultList(result);
            setSelectedMonth(Moment(nowMonth.dateString).format('YYYY-MM-DD'));
        }else{
            result = await getCalendar(Moment(selectedMonth).format('YYYY-MM'));
            setResultList(result);
        }
        getMark(result, nowMonth.dateString);
        setSpinvisible(false);
    };

    const getMark = (res, selected)=>{
        const start = Moment(selected).startOf('month').format('YYYY-MM-DD');
        const end = Moment(selected).endOf('month').add(1, 'days').format('YYYY-MM-DD');

        let result = {};
        let now = start;
        if(res){
            while(Moment(now).isBefore(end)){
                let today = [];
                res.map(item=>{
                    if(today.length<4 && Moment(now).isBetween(Moment(item.alarmDayStart).subtract(1, 'days').format('YYYY-MM-DD'), Moment(item.alarmDayEnd).add(1, 'days').format('YYYY-MM-DD'))){
                        if(Moment(now).isBefore(nowDate)){
                            today.push({key:item.alarmId, color:futureColor});
                        }else{
                            today.push({key:item.alarmId, color:beforeColor});
                        }
                    }
                });
                if(today.length>0){
                    result[now]={dots:today};
                }
                now = Moment(now).add(1, 'days').format('YYYY-MM-DD');
            }
            setMarkList(result);
        }
    }

    useFocusEffect(
        useCallback(()=>{
            getList(selectedMonth);
        }, [])
    );

    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9', justifyContent:'center' }}>
            <Spinner visible={spinVisible} />
            <Calendar
                style={{borderRadius:5, width:330}}
                theme={{todayTextColor:'#83BDFF', arrowColor:'black'}}
                markingType={'multi-dot'}
                markedDates={markList}
                monthFormat={'yyyy년 MM월'}
                onDayPress={(day)=>navigation.navigate('AlarmScreen', {day:day.dateString})}
                disableMonthChange={true}
                firstDay={7}
                hideDayNames={false}
                showWeekNumbers={false}
                onPressArrowLeft={substractMonth => substractMonth()}
                onPressArrowRight={addMonth => addMonth()}
                onMonthChange={(month)=>getList(month)}
            />
            <View style={{width:'100%', alignItems:'flex-end', height:60, justifyContent: 'flex-end'}}>
                <RoundBtn text='+' func={()=>navigation.navigate('Add')}/>
            </View>
        </View>
    );
};
export default CalendarPage;