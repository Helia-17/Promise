import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';
// import appleAuth, { AppleButton } from '@invertase/react-native-apple-authentication';
// import jwtDecode from 'jwt-decode';
import Logo from '../../assets/Promise_Logo.png';
import GoogleLoginBtn from '../../components/GoogleLoginBtn';
import AppleLoginBtn from '../../components/AppleLoginBtn';

const Login = () => {
    
    // async function onAppleButtonPress() {
    //   // performs login request
    //   const appleAuthRequestResponse = await appleAuth.performRequest({
    //     requestedOperation: appleAuth.Operation.LOGIN,
    //     requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    //   });
    //   // get current authentication state for user
    //   // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
    //   const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
    //   // use credentialState response to ensure the user is authenticated
    //   if (credentialState === appleAuth.State.AUTHORIZED) {
    //     // user is authenticated
    //     const decodedToken = jwtDecode(appleAuthRequestResponse.identityToken);
    //     const userEmail = decodedToken.email;
    //     console.log('Login Successed :: ');
    //     console.log('Response Info ::', appleAuthRequestResponse);
    //     console.log('decodedToken ::', decodedToken);
    //     console.log('decodedToken.userEmail :: ', userEmail);

    //   }
    // }

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
              // OS일 경우 넣어주십셔
              <View style={{alignItems: 'center'}}>
                <GoogleLoginBtn data={(data)=>alert(`email:${data.email}`)}/>
                {/* <TouchableOpacity onPress={() => onAppleButtonPress()}>
                  <Text>애플로그인</Text>
                </TouchableOpacity> */}
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