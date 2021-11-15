import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import { View, Text, Image, Alert, TextInput, TouchableOpacity  } from 'react-native';
import {myinfo, modifyNick, changeInfo} from '../../utils/axios';
import S3Upload from '../../components/S3Upload';

const ModifyInfo = ({navigation}) => {

    const [userNickname, setUserNickname] = useState('');
    const [petName, setPetName] = useState('');
    const [userProfile, setUserProfile] = useState('');
    const [changeNick, setChangeNick] = useState('');
    const [changePet, setChangePet] = useState('');
    const [isCheck, setIsCheck] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const getMyInfo = async ()=>{
        const result = await myinfo();
        setUserNickname(result.userNickname);
        setChangeNick(result.userNickname)
        setPetName(result.petName);
        setChangePet(result.petName);
        setUserProfile(result.userProfileUrl+ '?' + new Date());
        setUserEmail(result.userEmail);
    }

    useFocusEffect(
        useCallback(()=>{
            getMyInfo();
        }, [])
    );
    
    const checkNick = async ()=>{
        const result = await modifyNick(changeNick);
        Alert.alert(
            '중복 확인',
            result.message,
            [{
                text:'확인',
                onPress: ()=>{}
            }]
        );
        if(result.statusCode!==409){
            setIsCheck(true);
        }else{
            setIsCheck(false);
        }
    }

    const changedata = async()=>{
        await changeInfo(changeNick, changePet)
        .then(()=>{
            navigation.goBack();
        })
    }

    function saveChange(){
        if(changePet.length>0 && ( isCheck===true || userNickname === changeNick)){
            Alert.alert(
                '정보 수정',
                `해당 정보로 수정하시겠습니까?
    닉네임 : ${changeNick},
    펫 이름 : ${changePet}`,
                [{
                    text:'예',
                    onPress:()=>{changedata()}
                },{
                    text:'아니요',
                    onPress:()=>{}
                }]
            );
        }else{
            Alert.alert(
                '정보 수정',
                '닉네임 중복 체크를 해주세요.',
                [{
                    text:'확인',
                    onPress:()=>{}
                }]
            )
        }
    }

    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            <View style={{width: 450, height:150, flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginTop:30, marginBottom:30}}>
                <View style={{width:'30%', height:'90%', borderRadius:100, backgroundColor:'#C4C4C4'}}>
                    <Image resizeMode='cover' source={{uri:userProfile}} style={{width: '100%', height: '100%', borderRadius:100}}/>
                </View>
                <S3Upload name={(data)=>setUserProfile(data)}/>
            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
                <View style={{width: '70%', justifyContent: 'space-between', alignItems: 'center', flexDirection: "row"}}>
                    <Text>닉네임</Text>
                    <TouchableOpacity onPress={()=>checkNick()}>
                        <Text>중복확인</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:'70%', backgroundColor:'white', marginTop:10}}>
                    <TextInput
                        placeholder="닉네임입력"
                        onChangeText={setChangeNick}
                        value={changeNick}
                        style={{width:'100%', margin:5}}
                    />
                </View>
                <View style={{width: '70%', justifyContent: 'space-between', alignItems: 'center', flexDirection: "row", marginTop:20}}>
                    <Text>펫 이름</Text>
                </View>
                <View style={{width:'70%', backgroundColor:'white', marginTop:10}}>
                    <TextInput
                        placeholder="펫 이름 입력"
                        onChangeText={setChangePet}
                        value={changePet}
                        style={{width:'100%', margin:5}}
                    />
                </View>
            </View>
            <TouchableOpacity style={{width:'70%', height:45, backgroundColor:'#A3BED7', marginTop:20, alignItems:'center', borderRadius: 5, justifyContent: 'center'}} onPress={() => saveChange()}>
                <Text style={{color:'black', fontSize:18, fontWeight:'bold'}}>저장</Text>
            </TouchableOpacity>
        </View>
    );
};
export default ModifyInfo;