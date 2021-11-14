import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { StatusBar, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStore } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import combineReducers from './src/modules/reducers'
import Search from './src/pages/Search';
import Info from './src/pages/Info';
import Pharmacy from './src/pages/Pharmacy';
import Alarm from './src/pages/Alarm';
import Timeline from './src/pages/Timeline';
import CalendarPage from './src/pages/Calendar';
import AlarmAdd from './src/pages/AlarmAdd';
import CommunityPage from './src/pages/Community';
import PostCreatePage from './src/pages/PostCreate';
import PostDetailPage from './src/pages/PostDetail';
import HomePage from './src/pages/Home';
import Mypage from './src/pages/Mypage';
import Login from './src/pages/Login';
import MyPillNowPill from './src/pages/MyPillNowPill';
import MyPillHistory from './src/pages/MyPillHistory';

function HomeScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown : false
      }}>
      <Stack.Screen name='Home' component={HomePage}/>
    </Stack.Navigator>
  );
}

function CommunityScreen(){
  return (
    <Stack.Navigator >
      <Stack.Screen name='커뮤니티' component={CommunityPage} />
      <Stack.Screen name='글쓰기' component={PostCreatePage} />
      <Stack.Screen name='게시물' component={PostDetailPage} />
    </Stack.Navigator>
  )
}

function MyPageScreen(){
  return (
    <Stack.Navigator >
      <Stack.Screen name='마이페이지' component={Mypage} />
      <Stack.Screen name='마이필' component={MyPillScreen} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

function NowPillScreen(){
  return(
  <Stack.Navigator>
    <Stack.Screen name="MyPillNowPill" component={MyPillNowPill} options={{ headerShown : false }}/>
    <Stack.Screen name="Search" component={Search} options={{ headerShown : false }}/>
  </Stack.Navigator>
  )
}

function MyPillTab(){
  return (
    <TopTab.Navigator screenOptions={{tabBarActiveTintColor:'black', tabBarIndicatorStyle:{backgroundColor:'black'}, tabBarLabelStyle:{fontSize:15}}}>
      <TopTab.Screen name='NowPill' component={NowPillScreen} options={{title:'복용중인 약'}} />
      <TopTab.Screen name='PillHistory' component={MyPillHistory} options={{title:'최근 복용 이력'}}/>
    </TopTab.Navigator>
  )
}

function MyPillScreen(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyPillTab" component={MyPillTab} options={{ headerShown : false }}/>
    </Stack.Navigator>
  )
}


function MyTopTab(){
  return (
    <TopTab.Navigator screenOptions={{tabBarActiveTintColor:'black', tabBarIndicatorStyle:{backgroundColor:'black'}, tabBarLabelStyle:{fontSize:15}}}>
      <TopTab.Screen name='CalendarScreen' component={CalendarScreen}  options={{title:'달력'}}/>
      <TopTab.Screen name='Alarm' component={Alarm} options={{title:'알람'}} />
      <TopTab.Screen name='Timeline' component={Timeline} options={{title:'이력'}}/>
    </TopTab.Navigator>
  )
}

function TopTabStackScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="CalendarTab" component={MyTopTab} options={{ title: '일정' }}/>
    </Stack.Navigator>
  );
}

function CalendarScreen(){
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown : false
    }}
    >
      <Stack.Screen name="Calendar" component={CalendarPage} />
      <Stack.Screen name="Add" component={AlarmAdd} />
    </Stack.Navigator>
  )
}

function StackScreen({navigation}){
  return(
    <Stack.Navigator 
    screenOptions={{
      headerRight: ()=>(<Icon.Button onPress={()=>navigation.navigate('Search', {navigation:`${navigation}`})} name="magnify" color="black" backgroundColor='white' />),
    }}>
      <Stack.Screen name="Homes" component={HomeScreen} options={{title: '홈'}}/>
      <Stack.Screen name="Search" component={Search} options={{ title: '검색', headerRight: null }}/>
      <Stack.Screen name="Info" component={Info} options={{ title: '약 정보' }} />
    </Stack.Navigator>
  );
}

function MyTabs() {
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
      <Tab.Screen name="Home" component={StackScreen} options={{tabBarLabel:'홈'}}/>
      <Tab.Screen name="Pharmacy" component={Pharmacy} options={{ title: '약국' }} />
      <Tab.Screen name="CalendarPage" component={TopTabStackScreen} options={{ title: '일정' }} />
      <Tab.Screen name='CommunityScreen' component={CommunityScreen} options={{ title: '커뮤니티' }}/>
      <Tab.Screen name="Mypage" component={MyPageScreen} options={{ title: '내 정보' }}/>
    </Tab.Navigator>
  );
}

const App = () => {

  const [rootname, setRootname] = useState('LoginScreen');

  async function IsLogin (){
    AsyncStorage.getItem('isLogin')
    .then((result) =>{
      if(result==='true'){
        setRootname('appscreen');
      }else{
        setRootname('LoginScreen');
      }
    });
  };

  const [reload, setReload] = useState(0);

  useEffect(() => {
    SplashScreen.hide();
    IsLogin();
  }, [reload]);

  return (
    <SafeAreaProvider store={createStore(combineReducers)}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={true}/>
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerShown : false,
          initialRouteName : rootname
          }}>
          <Stack.Screen name="appscreen" component={MyTabs} />
          <Stack.Screen name="LoginScreen" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;