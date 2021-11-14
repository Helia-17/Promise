import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { View, Text, Image, Alert, TextInput, TouchableOpacity  } from 'react-native';
import {myinfo} from '../../utils/axios';
import RoundBtn from '../../components/atoms/RoundBtn';
import Icon from 'react-native-vector-icons/Ionicons';

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
        setUserProfile(result.userProfileUrl);
        setUserEmail(result.userEmail);
    }

    useFocusEffect(
        useCallback(()=>{
            getMyInfo();
        }, [])
    );

    function Album(){
        launchImageLibrary(
            {
            mediaType: 'photo',
            includeBase64: true,
            maxHeight: 500,
            maxWidth: 500,
            },
            (response) => {
                if(!response.didCancel){
                    console.log(response.assets[0].uri);
                    console.log(userEmail.split('.')[0]+'_'+userEmail.split('.')[1]);
                }
            }
        );
    };

    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            <View style={{width: 450, height:150, flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginTop:30, marginBottom:30}}>
                <View style={{width:'30%', height:'90%', borderRadius:100, backgroundColor:'#C4C4C4'}}>
                    <Image resizeMode='cover' source={{uri:userProfile}} style={{width: '100%', height: '100%', borderRadius:100}}/>
                </View>
                <View style={{position:'absolute', width:'50%', height:200, alignItems:'flex-end', justifyContent: 'flex-end'}}>
                    <RoundBtn text={<Icon name='pencil' color='black' size={30}/>} func={()=>Album()}/>
                </View>
            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
                <View style={{width: '70%', justifyContent: 'space-between', alignItems: 'center', flexDirection: "row"}}>
                    <Text>닉네임</Text>
                    <TouchableOpacity>
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
        </View>
    );
};
export default ModifyInfo;