import React from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomePage from '../../pages/Home';
import Info from '../../pages/Info';
import Search from '../../pages/Search';

const HomeNav = ({navigation}) => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator 
        screenOptions={{
          initialRouteName : 'Homes',
          headerRight: ()=>(<Icon.Button onPress={()=>navigation.navigate('Search', {navigation:`${navigation}`})} name="magnify" color="black" backgroundColor='white' />),
        }}>
          <Stack.Screen name="Homes" component={HomePage} options={{title: '홈'}}/>
          <Stack.Screen name="Search" component={Search} options={{ title: '검색', headerRight: null }}/>
          <Stack.Screen name="Info" component={Info} options={{ title: '약 정보' }} />
        </Stack.Navigator>
    );

}

export default HomeNav;