import React from 'react';
import { View, ScrollView, Text, InputText, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from '../../components/Carousel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const screenWidth = Math.round(Dimensions.get('window').width);
const PAGES = [1];

const HomePage = ({navigation}) => {
    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#F9F9F9' }}>
            <Carousel
            gap={0}
            offset={0}
            pages={PAGES}
            pageWidth={screenWidth}
            />
        </View>
    );
};
export default HomePage;