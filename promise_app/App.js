import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from './src/modules/reducers'
import Search from './src/pages/Search';
import Info from './src/pages/Info';
import Pharmacy from './src/pages/Pharmacy';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="go Info" onPress={()=>navigation.navigate('Info', {name:'타이레놀', company:'(주)한국얀센'})}/>
    </View>
  );
}

function CalendarScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Calendar Screen</Text>
    </View>
  );
}

function MypageScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>My page Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackScreen({navigation}){
  return(
    <Stack.Navigator 
    screenOptions={{
      headerRight: ()=>(<Icon.Button onPress={()=>navigation.navigate('Search', {navigation:`${navigation}`})} name="magnify" color="black" backgroundColor='white' />),
    }}>
      <Stack.Screen name="Homes" component={HomeScreen} />
      <Stack.Screen name="Search" component={Search} options={{ title: '검색', headerRight: null }}/>
      <Stack.Screen name="Info" component={Info} options={{ title: '약 정보' }}/>
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
          Calendar: 'calendar-blank',
          Mypage: 'account'
        }
        return(
          <Icon name={icons[route.name]} color={color} size={size} />
        )},
    })}>
      <Tab.Screen name="Home" component={StackScreen} options={{tabBarLabel:'홈'}}/>
      <Tab.Screen name="Pharmacy" component={Pharmacy} options={{ title: '약국' }} />
      <Tab.Screen name="Calendar" component={CalendarScreen} options={{ title: '일정' }}/>
      <Tab.Screen name="Mypage" component={MypageScreen} options={{ title: '내 정보' }}/>
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Provider store={createStore(combineReducers)}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}

export default App;