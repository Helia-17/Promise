import React from 'react';
import Mypage from '../../pages/Mypage';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import MyPillTop from '../MyPillTop';


const MyPageNav = () => {

    const Stack = createNativeStackNavigator();

    function MyPillScreen(){
        return (
          <Stack.Navigator>
            <Stack.Screen name="MyPillTab" component={MyPillTop} options={{ headerShown : false }}/>
          </Stack.Navigator>
        )
      }

    return (
      <Stack.Navigator >
        <Stack.Screen name='mypageScreen' component={Mypage} options={{ title: '마이페이지' }}/>
        <Stack.Screen name='mypill' component={MyPillScreen} options={{ title: '마이필' }}/>
      </Stack.Navigator>
    )
}

export default MyPageNav;