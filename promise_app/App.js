import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="go Sub1" onPress={()=>navigation.navigate('Sub1')}/>
    </View>
  );
}

function Sub1Screen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sub 1 Screen</Text>
    </View>
  );
}

function PharmacyScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pharmacy Screen</Text>
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

function StackScreen(){
  return(
    <Stack.Navigator screenOptions={{
      headerShown : false, 
    }}>
      <Stack.Screen name="Homes" component={HomeScreen} />
      <Stack.Screen name="Sub1" component={Sub1Screen}/>
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({route})=>({
      tabBarActiveTintColor: 'black', 
      headerRight: ()=>(<Icon.Button onPress={()=>alert('Search!')} name="magnify" color="black" backgroundColor='white' />),
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
      <Tab.Screen name="Home" component={StackScreen} options={{tabBarLabel:'Home', title: 'HOME'}}/>
      <Tab.Screen name="Pharmacy" component={PharmacyScreen} options={{ title: 'PHARMACY' }} />
      <Tab.Screen name="Calendar" component={CalendarScreen} options={{ title: 'CALENDAR' }}/>
      <Tab.Screen name="Mypage" component={MypageScreen} options={{ title: 'MYPAGE' }}/>
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;