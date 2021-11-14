import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { View, Text, Image, Alert, TextInput, TouchableOpacity  } from 'react-native';
import {myinfo} from '../../utils/axios';

const ModifyInfo = ({navigation}) => {

    const [userNickname, setUserNickname] = useState('');
    const [petName, setPetName] = useState('');
    const [userProfile, setUserProfile] = useState('');
    const [changeNick, setChangeNick] = useState('');

    const getMyInfo = async ()=>{
        const result = await myinfo();
        setUserNickname(result.userNickname);
        setChangeNick()
        setPetName(result.petName);
        setUserProfile(result.userProfileUrl);
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
                    console.log('S3 연결');
                }
            }
        );
    };

    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            <View style={{width: '100%', height: '50%'}}>
                <View style={{width: '100%', height:'40%', flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginTop:30, marginBottom:30}}>
                    <View style={{width:'30%', height:'90%', borderRadius:100, backgroundColor:'#C4C4C4'}}>
                        <Image resizeMode='cover' source={{uri:userProfile}} style={{width: '100%', height: '100%', borderRadius:100}}/>
                    </View>
                </View>
                <View style={{width: '100%', alignItems: 'center'}}>
                    <View style={{width: '70%', justifyContent: 'space-between', alignItems: 'center', flexDirection: "row"}}>
                        <Text>닉네임</Text>
                        <TouchableOpacity>
                        <Text>중복확인</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                </View>
            </View>
        </View>
    );
};
export default ModifyInfo;