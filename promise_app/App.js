import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { createStore } from 'redux';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import combineReducers from './src/modules/reducers'
import Login from './src/pages/Login';
import MyAppNav from './src/navigations/MyAppNav';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider store={createStore(combineReducers)}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={true}/>
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerShown : false
          }}>
            <Stack.Screen name="LoginScreen" component={Login} />
            <Stack.Screen name="appscreen" component={MyAppNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;