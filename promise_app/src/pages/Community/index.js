import React, {useState, useEffect} from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RoundBtn from '../../components/atoms/RoundBtn'; 

const CommunityPage = ({navigation}) => {
    
    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9', justifyContent:'center' }}>
            <ScrollView style={{ width:'100%', margin:10}} contentContainerStyle={{alignItems: 'center', margin:10}}>
                <Text>Community</Text>
                <View style={{width:'90%', margin:10}}>
                    <TouchableOpacity style={{backgroundColor:'#A3BED7', color:'black', alignItems: 'center', borderRadius: 12, height:50, justifyContent: 'center'}} onPress={()=>alert('등록이얌')}>
                        <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>등록하기</Text >
                    </TouchableOpacity>
                </View>

            </ScrollView>
            <View style={{width:'100%', alignItems:'flex-end', position: 'absolute', left: 0, right: 0, bottom: 0}}>
                <RoundBtn 
                    func={()=>navigation.navigate('PostCreate')}
                    text={<Icon name="plus" 
                    style={{
                    color: "white",
                    fontSize: 30,
                    }} />}>
                </RoundBtn>
            </View>
        </View>
    );
};

export default CommunityPage;