import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import appleAuth, { AppleButton } from '@invertase/react-native-apple-authentication';
import jwtDecode from 'jwt-decode';

const AppleLoginBtn = (props) => {
    
    async function onAppleButtonPress() {
      // performs login request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });
      // get current authentication state for user
      // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
      const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
      // use credentialState response to ensure the user is authenticated
      if (credentialState === appleAuth.State.AUTHORIZED) {
        // user is authenticated
        const decodedToken = jwtDecode(appleAuthRequestResponse.identityToken);
        const userEmail = decodedToken.email;
        console.log('Login Successed :: ');
        console.log('Response Info ::', appleAuthRequestResponse);
        console.log('decodedToken ::', decodedToken);
        console.log('decodedToken.userEmail :: ', userEmail);
        props.data({email:userEmail});
      }
    }

    return (
        <View style={{}}>
            <TouchableOpacity onPress={() => onAppleButtonPress()}>
                <Text>애플로그인</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AppleLoginBtn;