import React from 'react';
import Info from '../../pages/Info';
import Search from '../../pages/Search';
import MyPillNowPill from '../../pages/MyPillNowPill';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';


const NowPillNav = () => {

	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen name="MyPillNowPill" component={MyPillNowPill} options={{ headerShown : false }}/>
			<Stack.Screen name="NowPillInfoNav" component={NowPillInfoNav} options={{ headerShown : false }} />
			
		</Stack.Navigator>
    )
}

const NowPillInfoNav  = ({route}) => {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen name="MyPillInfo" options={{ headerShown : false }} >
				{() => <Info route={route}/>}
			</Stack.Screen>
		</Stack.Navigator>
	)
}

export default NowPillNav;