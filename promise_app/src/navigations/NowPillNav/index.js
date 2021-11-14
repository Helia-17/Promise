import React from 'react';
import Search from '../../pages/Search';
import MyPillNowPill from '../../pages/MyPillNowPill';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';


const NowPillNav = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="MyPillNowPill" component={MyPillNowPill} options={{ headerShown : false }}/>
            <Stack.Screen name="Search" component={Search} options={{ headerShown : false }}/>
        </Stack.Navigator>
    )
}

export default NowPillNav;