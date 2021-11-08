import React, {useState, useEffect} from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import RoundButton from '../../components/atoms/RoundButton'; 

const CommunityPage = ({navigation}) => {
    
    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9', justifyContent:'center' }}>
            <ScrollView style={{ width:'100%', margin:10}} contentContainerStyle={{alignItems: 'center', margin:10}}>
                <Text>Community</Text>
                <View style={{width:'90%', margin:10}}>
                    <TouchableOpacity style={{backgroundColor:'#A3BED7', color:'black', alignItems: 'center', borderRadius: 12, height:50, justifyContent: 'center'}} onPress={()=>alert('등록이얌')}>
                        <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>등록하기</Text >
                    </TouchableOpacity>
                    {/* <RoundButton/> */}
                </View>
            </ScrollView>
        </View>
    );
};

export default CommunityPage;