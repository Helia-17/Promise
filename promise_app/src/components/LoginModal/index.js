import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, ScrollView, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const LoginModal = (props) => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const sendData = ()=>{
        if(id && pw){
            props.user({id:id, pw:pw});
            props.next(false);
        }else if(!id){
            Alert.alert(
                '이메일을 입력해주세요.',
            [{
                text:'확인',
                onPress:()=>{}
            }]);
        }
        else if(pw.length<1){
            Alert.alert(
                '비밀번호를 입력해주세요.',
            [{
                text:'확인',
                onPress:()=>{}
            }]);
        }
    }

    return (
        <View style={{justifyContent: 'center', alignItems: 'center', flex:1, backgroundColor:'rgba(0,0,0,0.5)'}}>
            <View style={{position: 'absolute', width: '80%', height: '40%', backgroundColor: 'white', borderRadius: 20, elevation:2}} >
                <View style={{flexDirection: "row", margin:20, alignItems: 'center', justifyContent:'space-between'}}>
                    <Text style={{fontSize:20, color: 'black', fontWeight: 'bold', marginLeft:10}}>로그인</Text>
                    <Icon.Button name='close' size={17} color='black' backgroundColor='white' onPress={()=>props.exit(false)}/>
                </View>
                <ScrollView style={{ width:'100%'}} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{flexDirection: "row",alignItems: 'center', justifyContent: 'center', width:'95%', marginTop:5}}>
                        <Text style={{fontSize:15, color: 'black', fontWeight: 'bold', width:'20%'}}>이메일</Text>
                        <View style={{width:'63%', height:40, margin: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EEEEEE', borderRadius: 20}}>
                            <View style={{ alignItems: 'center', flexDirection: "row", margin:1}}>
                                <TextInput onChangeText={setId} value={id} style={{width:'70%', textAlign:'center', backgroundColor: '#EEEEEE', borderRadius: 20, marginRight:5}}/>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: "row",alignItems: 'center', justifyContent: 'center', width:'100%', marginTop:5}}>
                        <Text style={{fontSize:15, color: 'black', fontWeight: 'bold', width:'20%'}}>비밀번호</Text>
                        <View style={{width:'60%', height:40, margin: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EEEEEE', borderRadius: 20}}>
                            <View style={{ alignItems: 'center', flexDirection: "row", margin:1}}>
                                <TextInput secureTextEntry={true} onChangeText={setPw} value={pw} style={{width:'70%', textAlign:'center', backgroundColor: '#EEEEEE', borderRadius: 20}}/>
                            </View>
                        </View>
                    </View>
                    <View style={{margin:20, alignItems: 'center', width:'100%'}}>
                        <TouchableOpacity style={{backgroundColor:'#A3BED7', color:'black', width:'50%', alignItems: 'center', borderRadius: 5, height:40, justifyContent: 'center'}} onPress={()=>sendData()}>
                            <Text style={{color:'black', fontSize:15, fontWeight:'bold'}} >로그인</Text >
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );   
}

export default LoginModal;