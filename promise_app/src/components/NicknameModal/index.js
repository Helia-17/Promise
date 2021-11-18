import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {userAPI} from '../../utils/axios';

const NicknameModal = (props) => {
    const [nickColor, setNickColor] = useState('#000000');

    const [nick, setNick] = useState('');

    const checkNick = async ()=>{
        const result = await userAPI.nickCheck(nick);
        if(result===200) {
            setNickColor('#A6DB9E');
        }else if(result===409){
            setNickColor('#FFABAB');
        }
    }

    const sendData = () =>{
        if(nickColor==='#A6DB9E'){
            props.usernick(nick);
            props.now(false);
            props.next(true);
        }else if(nick.length===0){
            alert('닉네임을 입력해주세요.');
        }else if(nickColor==='#000000'){
            alert('닉네임 중복확인을 해주세요.');
        }else {
            alert('중복된 닉네임입니다. 다시 확인해주세요.');
        }
    }

    return (
        <View style={{justifyContent: 'center', alignItems: 'center', flex:1, backgroundColor:'rgba(0,0,0,0.5)'}}>
            <View style={{position: 'absolute', width: '80%', height: '30%', backgroundColor: 'white', borderRadius: 20, elevation:2}} >
                <ScrollView style={{ width:'100%'}} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{flexDirection: "row", margin:10, alignItems: 'center', justifyContent:'flex-end', width:'90%'}}>
                        <Icon.Button name='close' size={17} color='black' backgroundColor='white' onPress={()=>props.exit(false)}/>
                    </View>
                    <View style={{width:'100%', alignItems: 'center'}}>
                        <Text style={{fontSize:15, color: 'black', fontWeight: 'bold', margin:5}}>사용하실 닉네임을 입력해주세요.</Text>
                    </View>
                    <View style={{flexDirection: "row",alignItems: 'center', justifyContent: 'center', width:'95%', marginTop:5}}>
                        <View style={{width:'60%', height:40, margin: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EEEEEE', borderRadius: 20}}>
                            <View style={{ alignItems: 'center', flexDirection: "row", margin:1}}>
                                <TextInput onChangeText={setNick} value={nick} style={{width:'70%', textAlign:'center', backgroundColor: '#EEEEEE', borderRadius: 20, marginRight:5}}/>
                                <Icon name='checkcircle' color={nickColor} size={17}/>
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=>checkNick()}>
                            <Text>중복 확인</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:15, alignItems: 'center', width:'100%'}}>
                        <TouchableOpacity style={{backgroundColor:'#A3BED7', color:'black', width:'50%', alignItems: 'center', borderRadius: 5, height:40, justifyContent: 'center'}} onPress={()=>sendData()}>
                            <Text style={{color:'black', fontSize:15, fontWeight:'bold'}} >다음 단계</Text >
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default NicknameModal;