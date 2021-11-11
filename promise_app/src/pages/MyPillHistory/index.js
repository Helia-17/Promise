import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MediInfo from '../../components/atoms/MediInfo';
import Moment from 'moment';

const MyPillHistory = (props) => {

    if(props.route.params){
        console.log(props.route.params.day);
    }else{
        let day = Moment().format('YYYY-MM-DD');
        console.log(day);
    }
    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            <ScrollView style={{ width:'100%', margin:10}} contentContainerStyle={{alignItems: 'center'}}>
                <MediInfo name='비타민C' date='2021.10.15 15:22' />
                <MediInfo name='감기약' date='2021.10.15 15:22' pillList='해열제, 항생제, 000'/>
                <MediInfo name='비타민C' date='2021.10.15 15:22' />
                <MediInfo name='감기약' date='2021.10.15 15:22' pillList='해열제, 항생제, 000'/>
                <MediInfo name='비타민C' date='2021.10.15 15:22' />
                <MediInfo name='감기약' date='2021.10.15 15:22' pillList='해열제, 항생제, 000'/>
            </ScrollView>
        </View>
    );
};
export default MyPillHistory;