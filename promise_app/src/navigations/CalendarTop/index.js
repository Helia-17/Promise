import React from 'react';
import {createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CalendarNav from '../CalendarNav';
import Alarm from '../../pages/Alarm';
import Timeline from '../../pages/Timeline';

const CalendarTop = () => {
    const TopTab = createMaterialTopTabNavigator();

    return (
        <TopTab.Navigator screenOptions={{tabBarActiveTintColor:'black', tabBarIndicatorStyle:{backgroundColor:'black'}, tabBarLabelStyle:{fontSize:15}}}>
            <TopTab.Screen name='CalendarScreen' component={CalendarNav}  options={{title:'달력'}}/>
            <TopTab.Screen name='Alarm' component={Alarm} options={{title:'알람'}} />
            <TopTab.Screen name='Timeline' component={Timeline} options={{title:'이력'}}/>
        </TopTab.Navigator>
    );

}

export default CalendarTop;