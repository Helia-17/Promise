import React from 'react';
import { View } from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import RoundBtn from '../../components/atoms/RoundBtn';

const CalendarPage = ({navigation}) => {
    LocaleConfig.locales['ko']={
        monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
        monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
        dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
        dayNamesShort: ['일', '월','화','수','목','금','토'],
        today: 'Aujourd\'hui'
    };
    LocaleConfig.defaultLocale = 'ko';
    
    const markTest = {key:'mark1', color:'#FF4D75'}
    const beforeTest = {key:'before', color:'#C4C4C4'}
    const beforeTest2 = {key:'before2', color:'#C4C4C4'}
    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9', justifyContent:'center' }}>
            <Calendar
                style={{borderRadius:5, width:330}}
                theme={{todayTextColor:'#83BDFF', arrowColor:'black'}}
                markingType={'multi-dot'}
                markedDates={{'2021-11-18':{dots:[markTest]},'2021-11-02':{dots:[beforeTest, beforeTest2]}}}
                monthFormat={'yyyy년 MM월'}
                onDayPress={(day)=>navigation.navigate('Alarm', {day:day.dateString})}
                disableMonthChange={true}
                firstDay={7}
                hideDayNames={false}
                showWeekNumbers={false}
                onPressArrowLeft={substractMonth => substractMonth()}
                onPressArrowRight={addMonth => addMonth()}
            />
            <View style={{width:'100%', alignItems:'flex-end', height:60, justifyContent: 'flex-end'}}>
                <RoundBtn text='+' func={()=>navigation.navigate('Add')}/>
            </View>
        </View>
    );
};
export default CalendarPage;