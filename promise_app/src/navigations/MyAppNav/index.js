import React from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CommunityNav from '../CommunityNav';
import HomeNav from '../HomeNav';
import CalendarTop from '../CalendarTop';
import MyPageNav from '../MypageNav';
import Pharmacy from '../../pages/Pharmacy';


const MyAppNav = () => {

    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    function TopTabStackScreen(){
        return(
          <Stack.Navigator>
            <Stack.Screen name="CalendarTab" component={CalendarTop} options={{ title: '복용 일정' }}/>
          </Stack.Navigator>
        );
      }

    return (
        <Tab.Navigator 
        screenOptions={({route})=>({
          tabBarActiveTintColor: 'black',
          headerShown : false, 
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Home: 'home',
              Pharmacy : 'map-marker',
              CalendarPage: 'calendar-blank',
              Mypage: 'account',
              CommunityScreen: 'account-group'
            }
            return(
              <Icon name={icons[route.name]} color={color} size={size} />
            )},
        })}>
          <Tab.Screen name="Home" component={HomeNav} options={{tabBarLabel:'홈'}}/>
          <Tab.Screen name="Pharmacy" component={Pharmacy} options={{ title: '약국' }} />
          <Tab.Screen name="CalendarPage" component={TopTabStackScreen} options={{ title: '일정' }} />
          <Tab.Screen name='CommunityScreen' component={CommunityNav} options={{ title: '커뮤니티' }}/>
          <Tab.Screen name="Mypage" component={MyPageNav} options={{ title: '내 정보' }}/>
        </Tab.Navigator>
    )
}

export default MyAppNav;