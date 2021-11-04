import React, {useState} from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';

const AlarmAdd = () => {
    const [text, onChangeText] = useState('');
    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'white' }}>
            <ScrollView style={{ width:'100%', margin:10}} contentContainerStyle={{alignItems: 'center', margin:10}}>
                <View style={{flexDirection: "row", alignItems: 'center', width:'90%', justifyContent: 'center' , height:50}}>
                    <Text style={{ fontSize:15, color:'black', fontWeight:'bold', width:'20%' }}>복용명</Text>
                    <View style={{width:'78%', backgroundColor:'#E9E9E9', height:35, borderRadius: 20, alignItems: 'center'}}>
                        <TextInput onChangeText={onChangeText} value={text} style={{width:'80%', backgroundColor: '#EEEEEE', borderRadius: 20}}/>
                    </View>
                </View>
                <View style={{flexDirection: "row", alignItems: 'center', width:'90%', justifyContent: 'center', height:50}}>
                    <Text style={{ fontSize:15, color:'black', fontWeight:'bold', width:'20%'  }}>기간</Text>
                    <View style={{width:'78%', backgroundColor:'#E9E9E9', height:35, borderRadius: 20, alignItems: 'center'}}></View>
                </View>
                <View style={{flexDirection: "row", alignItems: 'center', width:'90%', justifyContent: 'center', height:50}}>
                    <Text style={{ fontSize:15, color:'black', fontWeight:'bold', width:'20%'  }}>약 정보</Text>
                    <View style={{width:'78%', backgroundColor:'#E9E9E9', height:35, borderRadius: 20, alignItems: 'center'}}></View>
                </View>
                <View style={{flexDirection: "row", alignItems: 'center', width:'90%', justifyContent: 'center', height:50}}>
                    <Text style={{ fontSize:15, color:'black', fontWeight:'bold', width:'20%'  }}>태그</Text>
                    <View style={{width:'78%', backgroundColor:'#E9E9E9', height:35, borderRadius: 20, alignItems: 'center'}}></View>
                </View>
            </ScrollView>
        </View>
    );
};
export default AlarmAdd;