import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';
import Logo from '../../assets/Promise_Logo.png';
import GoogleLoginBtn from '../../components/GoogleLoginBtn';
import AppleLoginBtn from '../../components/AppleLoginBtn';

const Login = () => {

    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'space-around'}}>
            
            <View style={{justifyContent: 'center'}}>
              <Image source={Logo} style={{height: '50%'}} resizeMode='contain'/>
              <Text style={{fontSize: 25, color:'black', fontWeight:'bold', marginTop:'5%'}}>더 건강한 나를 위한 약속</Text>
            </View>
            {Platform.OS==='android'?(
              <View style={{alignItems: 'center'}}>
                <GoogleLoginBtn data={(data)=>alert(`email:${data.email}`)}/>
                <TouchableOpacity style={{height:48, justifyContent: 'center'}}>
                  <Text style={{textDecorationLine: 'underline'}}>이메일로 회원가입하기</Text>
                </TouchableOpacity>
              </View>
            ):(
              <View style={{alignItems: 'center'}}>
                <GoogleLoginBtn data={(data)=>alert(`email:${data.email}`)}/>
                <AppleLoginBtn data={(data)=>alert(`email:${data.email}`)}/>
                <TouchableOpacity style={{height:48, justifyContent: 'center'}}>
                  <Text style={{textDecorationLine: 'underline'}}>이메일로 회원가입하기</Text>
                </TouchableOpacity>
              </View>
            )}
        </View>
    )
}

export default Login;