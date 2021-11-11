import React from 'react';
import { View, ScrollView, Text, InputText, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomePage = ({navigation}) => {
    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#F9F9F9' }}>
            <Text>Home Page</Text>
        </View>
    );
};
export default HomePage;