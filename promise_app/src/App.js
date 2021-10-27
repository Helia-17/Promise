import React from 'react';
import { View, Text } from 'react-native';
import Test from './pages/test'

const App = () => {
  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MAIN</Text>
      <Test />
    </View>
  );
};

export default App;