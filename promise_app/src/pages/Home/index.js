import React from 'react';
import { View, ScrollView, Text, InputText, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomePage = ({navigation}) => {
    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            <View style={{width:'90%', margin:10}}>
                <TouchableOpacity style={{backgroundColor:'#A3BED7', color:'black', alignItems: 'center', borderRadius: 12, height:50, justifyContent: 'center'}} onPress={()=>alert('등록이얌')}>
                    <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>등록하기</Text >
                </TouchableOpacity>
            </View>
            <View style={{width:'90%', alignItems:'flex-end'}}>
                <Icon.Button onPress={()=>navigation.navigate('Community')} name="forum" color="black" backgroundColor='#F9F9F9' />
            </View>
        </View>
    );
};
export default HomePage;