import React from 'react';
import {createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NowPillNav from '../NowPillNav';
import MyPillHistory from '../../pages/MyPillHistory';

const MyPillTop = () => {
    const TopTab = createMaterialTopTabNavigator();

    return (
        <TopTab.Navigator screenOptions={{tabBarActiveTintColor:'black', tabBarIndicatorStyle:{backgroundColor:'black'}, tabBarLabelStyle:{fontSize:15}}}>
            <TopTab.Screen name='NowPill' component={NowPillNav} options={{title:'복용중인 약'}} />
            <TopTab.Screen name='PillHistory' component={MyPillHistory} options={{title:'최근 복용 이력'}}/>
        </TopTab.Navigator>
    );

}

export default MyPillTop;