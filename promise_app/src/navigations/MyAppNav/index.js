import React, {useState, useLayoutEffect} from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomePage from '../../pages/Home';
import Info from '../../pages/Info';
import Search from '../../pages/Search';
import Pharmacy from '../../pages/Pharmacy';
import CalendarPage from '../../pages/Calendar';
import AlarmAdd from '../../pages/AlarmAdd';
import Alarm from '../../pages/Alarm';
import Timeline from '../../pages/Timeline';
import CommunityPage from '../../pages/Community';
import PostCreatePage from '../../pages/PostCreate';
import PostUpdatePage from '../../pages/PostUpdate';
import PostDetailPage from '../../pages/PostDetail';
import Mypage from '../../pages/Mypage';
import ModifyInfo from '../../pages/ModifyInfo';
import MyPillHistory from '../../pages/MyPillHistory';
import MyPillNowPill from '../../pages/MyPillNowPill';
import Login from '../../pages/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyApp = ({navigation}) => {

    const Stack = createNativeStackNavigator();
    const TopTab = createMaterialTopTabNavigator();
    const Tab = createBottomTabNavigator();

    function CalendarNav(){
      return (
        <Stack.Navigator 
        screenOptions={{
          headerShown : false,
          initialRouteName : 'Calendar'
        }}
        >
          <Stack.Screen name="Calendar" component={CalendarPage} />
          <Stack.Screen name="Add" component={AlarmAdd} />
        </Stack.Navigator>
      );
    }

    function CalendarTop() {
      return (
        <TopTab.Navigator screenOptions={{
          tabBarActiveTintColor:'black', 
          tabBarIndicatorStyle:{backgroundColor:'black'}, 
          tabBarLabelStyle:{fontSize:15},
          initialRouteName:'CalendarScreen'
          }}>
            <TopTab.Screen name='CalendarScreen' component={CalendarNav}  options={{title:'달력'}}/>
            <TopTab.Screen name='Alarm' component={Alarm} options={{title:'알람'}} />
            <TopTab.Screen name='Timeline' component={Timeline} options={{title:'이력'}}/>
        </TopTab.Navigator>
      );
    }

    function CommunityNav() {
      return (
        <Stack.Navigator screenOptions={{initialRouteName:'community'}}>
          <Stack.Screen name='community' component={CommunityPage} options={{title:'커뮤니티'}}/>
          <Stack.Screen name='communitywrite' component={PostCreatePage} options={{title:'글 작성'}}/>
          <Stack.Screen name='communityupdate' component={PostUpdatePage} options={{title:'글 수정'}}/>
          <Stack.Screen name='communitydetail' component={PostDetailPage} options={{title:''}}/>
        </Stack.Navigator>
      );
    }

    function TopTabStackScreen(){
      return(
        <Stack.Navigator>
          <Stack.Screen name="CalendarTab" component={CalendarTop} options={{ title: '복용 일정' }}/>
        </Stack.Navigator>
      );
    }

    function MyPillScreen(){
      return (
        <Stack.Navigator>
          <Stack.Screen name="MyPillTab" component={MyPillTop} options={{ headerShown : false }}/>
        </Stack.Navigator>
      )
    }

    function HomeNav({navigation}) {
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

    function MyPageNav() {
      return (
        <Stack.Navigator 
        screenOptions={{
          initialRouteName:'mypageScreen'
        }}>
          <Stack.Screen name='mypageScreen' component={Mypage} options={{ title: '마이페이지' }}/>
          <Stack.Screen name='modifyInfo' component={ModifyInfo} options={{ title: '정보수정' }}/>
          <Stack.Screen name='mypill' component={MyPillScreen} options={{ title: '마이필' }}/>
        </Stack.Navigator>
      )
    }

    function MyPillTop() {
      return (
        <TopTab.Navigator screenOptions={{
            tabBarActiveTintColor:'black', 
            tabBarIndicatorStyle:{backgroundColor:'black'},
            tabBarLabelStyle:{fontSize:15},
            initialRouteName:'NowPill'
           }}>
            <TopTab.Screen name='NowPill' component={NowPillNav} options={{title:'복용중인 약'}} />
            <TopTab.Screen name='PillHistory' component={MyPillHistory} options={{title:'최근 복용 이력'}}/>
        </TopTab.Navigator>
      );
    }

    function NowPillNav() {
      return (
        <Stack.Navigator screenOptions={{initialRouteName : 'MyPillNowPill'}}>
            <Stack.Screen name="MyPillNowPill" component={MyPillNowPill} options={{ headerShown : false }}/>
            <Stack.Screen name="Info" component={Info} options={{ headerShown : false }} />
        </Stack.Navigator>
      )
    }

    function MyAppNav() {
      return(
      <Tab.Navigator 
        screenOptions={({route})=>({
          initialRouteName:'Home',
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

    const [isLogin, setIsLogin] = useState(false);

    const checkLogin = async() =>{
      setIsLogin(await AsyncStorage.getItem('token'));
    }

    useLayoutEffect(() => {
      checkLogin();
    }, []);

    return (
      <Stack.Navigator 
      screenOptions={{
        headerShown : false
        }}>
          {isLogin?(
            <Stack.Screen name="appscreen" component={MyAppNav} />
          ):(
            <Stack.Screen name="LoginScreen" component={Login} />
          )}
      </Stack.Navigator>
    )
}

export default MyApp;