import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import RoundBtn from '../../components/atoms/RoundBtn'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const Mypage = ({navigation}) => {
    const logout = () =>{
        AsyncStorage.setItem('isLogin', 'false');
        AsyncStorage.removeItem('token');
        navigation.navigate('LoginScreen');
    }
    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            <View style={{width: '100%'}}>
                <View style={{width: '100%', height:'40%', flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', margin:30}}>
                    <View style={{width:'30%', height:'90%', borderRadius:100, backgroundColor:'#C4C4C4'}}>

                    </View>
                    <View style={{width:'60%'}}>
                        <Text>닉네임</Text>
                        <Text>Lv2. 펫이름</Text>
                        <View style={{flexDirection: "row", width:'50%', alignItems: 'center', justifyContent: 'space-between'}}>
                            <TouchableOpacity onPress={()=>logout()}>
                                <Text>로그아웃</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>회원탈퇴</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <Text style={{color:'black'}}>Mypage 지롱</Text>
            <RoundBtn text='+' func={()=>navigation.navigate('마이필')}/>
        </View>
    );
};
export default Mypage;