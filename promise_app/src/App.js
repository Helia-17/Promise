import React from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from './modules/reducers'
import Container from './pages/container'

const App = () => {
  return (
    <Provider store={createStore(combineReducers)}>
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>MAIN</Text>
        <Container />
      </View>
    </Provider>
  );
};

export default App;