import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, BackHandler, Alert } from 'react-native';
import { createStore } from 'redux';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import combineReducers from './src/modules/reducers'
import MyApp from './src/navigations/MyAppNav';

const App = () => {
  console.disableYellowBox = true;
  useEffect(() => {
    SplashScreen.hide();
    const backAction = () => {
      Alert.alert("앱 종료하기", "앱을 종료하시겠습니까?", [
        {
          text: "취소",
          onPress: () => null,
        },
        { text: "확인", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Provider store={createStore(combineReducers)}>
      <SafeAreaProvider>
      <StatusBar barStyle='dark-content' hidden={false} backgroundColor='white' translucent={true}/>
        <NavigationContainer>
          <MyApp/>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;