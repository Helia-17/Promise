import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { createStore } from 'redux';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import combineReducers from './src/modules/reducers'
import MyApp from './src/navigations/MyAppNav';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider store={createStore(combineReducers)}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={true}/>
      <NavigationContainer>
        <MyApp/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;