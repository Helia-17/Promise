import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const CalendarPage = ({navigation}) => {
    LocaleConfig.locales['fr']={
        monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
        monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
        dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
        dayNamesShort: ['일', '월','화','수','목','금','토'],
        today: 'Aujourd\'hui'
    };
    
    const markTest = {key:'mark1', color:'#FF4D75'}
    const beforeTest = {key:'before', color:'#C4C4C4'}
    const beforeTest2 = {key:'before2', color:'#C4C4C4'}
    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9', justifyContent:'center' }}>
            <View style={{width:'90%', alignItems:'flex-end'}}>
                <Icon.Button onPress={()=>navigation.navigate('Add')} name="plus" color="black" backgroundColor='#F9F9F9' />
            </View>
            <Calendar
                style={{borderRadius:5, width:330}}
                theme={{todayTextColor:'#83BDFF', arrowColor:'black'}}
                markingType={'multi-dot'}
                markedDates={{'2021-11-18':{dots:[markTest]},'2021-11-02':{dots:[beforeTest, beforeTest2]}}}
                monthFormat={'yyyy년 MM월'}
                onDayPress={(day)=>navigation.navigate('Alarm', {day:day.dateString})}
                disableMonthChange={true}
                firstDay={1}
                hideDayNames={false}
                showWeekNumbers={false}
                onPressArrowLeft={substractMonth => substractMonth()}
                onPressArrowRight={addMonth => addMonth()}
            />
        </View>
    );
};
export default CalendarPage;