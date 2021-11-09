import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { StatusBar, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStore } from 'redux';
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
import HomePage from './src/pages/Home';
import Mypage from './src/pages/Mypage';

function HomeScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown : false
      }}>
      <Stack.Screen name='Home' component={HomePage}/>
      <Stack.Screen name='Community' component={CommunityPage} />
      <Stack.Screen name='PostCreate' component={PostCreatePage} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

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
          Mypage: 'account'
        }
        return(
          <Icon name={icons[route.name]} color={color} size={size} />
        )},
    })}>
      <Tab.Screen name="Home" component={StackScreen} options={{tabBarLabel:'홈'}}/>
      <Tab.Screen name="Pharmacy" component={Pharmacy} options={{ title: '약국' }} />
      <Tab.Screen name="CalendarPage" component={TopTabStackScreen} options={{ title: '일정' }} />
      {/* <Tab.Screen name="CalendarPage" component={MyTopTab} options={{ title: '일정' }}/> */}
      <Tab.Screen name="Mypage" component={Mypage} options={{ title: '내 정보' }}/>
    </Tab.Navigator>
  );
}

function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    
    <SafeAreaProvider store={createStore(combineReducers)}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={true}/>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;