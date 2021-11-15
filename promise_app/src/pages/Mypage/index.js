import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {myinfo, withdraw} from '../../utils/axios';

const Mypage = ({navigation}) => {
    const [userNickname, setUserNickname] = useState('');
    const [petName, setPetName] = useState('');
    const [petLevel, setPetLevel] = useState(1);
    const [userProfile, setUserProfile] = useState('');

    const logout = () =>{
        Alert.alert(
            '로그아웃',
            '로그아웃 하시겠습니까?',
            [{
                text:'예',
                onPress : ()=>{
                    AsyncStorage.removeItem('token');
                    navigation.replace('LoginScreen');
                }
            },{
                text:'아니요',
                onPress: ()=>{}
            }]
        )
        
    }

    const getMyInfo = async ()=>{
        const result = await myinfo();
        setUserNickname(result.userNickname);
        setPetName(result.petName);
        setPetLevel(result.petLevel);
        if(result.userProfileUrl){
            setUserProfile(result.userProfileUrl+ '?' + new Date());
        }
    }

    useFocusEffect(
        useCallback(()=>{
            getMyInfo();
        }, [])
    );

    const withdrawCheck = ()=>{
        Alert.alert(
            '회원 탈퇴',
            '약속을 탈퇴하시겠습니까?',
            [{
                text:'예',
                onPress : ()=> withdrawAccount()
            },{
                text:'아니요',
                onPress : ()=> {}
            }],
            {cancleable:false}
        )
    }

    const withdrawAccount = async()=>{
        const result = await withdraw();
        if(result === 200){
            Alert.alert(
                '회원 탈퇴',
                '성공적으로 탈퇴되셨습니다.',
                [{
                    text:'확인',
                    onPress: ()=>{
                        AsyncStorage.removeItem('token');
                        navigation.replace('LoginScreen');
                    }
                }]
            );
            
        }
    }
    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            <View style={{width: '100%', height: '50%'}}>
                <View style={{width: '100%', height:'40%', flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', margin:30}}>
                    <View style={{width:'30%', height:'90%', borderRadius:100, backgroundColor:'#C4C4C4'}}>
                        <Image resizeMode='cover' source={{uri:userProfile}} style={{width: '100%', height: '100%', borderRadius:100}}/>
                    </View>
                    <View style={{width:'60%', height:'70%', justifyContent: 'space-between'}}>
                        <Text style={{fontWeight: 'bold', fontSize:20}}>{userNickname}</Text>
                        <Text style={{fontWeight: 'bold', fontSize:15}}>Lv{petLevel}. {petName}</Text>
                        <View style={{flexDirection: "row", width:'50%', alignItems: 'center', justifyContent: 'space-between'}}>
                            <TouchableOpacity onPress={()=>logout()}>
                                <Text style={{color:'#5A88B1', fontWeight:'bold'}}>로그아웃</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>withdrawCheck()}>
                                <Text style={{color:'#999999', fontWeight:'bold'}}>회원탈퇴</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{width: '100%', alignItems: 'center'}}>
                    <TouchableOpacity style={{width:'85%', backgroundColor:'#FFFFFF', height:'30%', margin:10, borderRadius:3, borderColor:'#BDBDBD', borderWidth:0.3}} onPress={()=>navigation.navigate('modifyInfo')}>
                        <View style={{flexDirection: "row", alignItems: 'center', justifyContent:'space-between', width:'100%', height:'100%'}}>
                            <View style={{flexDirection:"row", marginLeft:'5%'}}>
                                <Icon name='pencil' color='black' size={30}/>
                                <Text style={{fontSize:18, marginLeft:'10%'}}>정보수정</Text>
                            </View>
                            <Icon name='chevron-right' color='black' size={30} style={{marginRight:'5%'}}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'85%', backgroundColor:'#FFFFFF', height:'30%', margin:10, borderRadius:3, borderColor:'#BDBDBD', borderWidth:0.3}} onPress={()=>navigation.navigate('mypill')}>
                        <View style={{flexDirection: "row", alignItems: 'center', justifyContent:'space-between', width:'100%', height:'100%'}}>
                            <View style={{flexDirection:"row", marginLeft:'5%'}}>
                                <Icon name='pill' color='black' size={30}/>
                                <Text style={{fontSize:18, marginLeft:'10%'}}>마이필</Text>
                            </View>
                            <Icon name='chevron-right' color='black' size={30} style={{marginRight:'5%'}}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
export default Mypage;