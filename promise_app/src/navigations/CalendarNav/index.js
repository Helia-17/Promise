import React from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import CalendarPage from '../../pages/Calendar';
import AlarmAdd from '../../pages/AlarmAdd';

const CalendarNav = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator 
        screenOptions={{
        headerShown : false
        }}
        >
        <Stack.Screen name="Calendar" component={CalendarPage} />
        <Stack.Screen name="Add" component={AlarmAdd} />
        </Stack.Navigator>
    );

}

export default CalendarNav;