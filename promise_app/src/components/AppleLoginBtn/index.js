import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import appleAuth, { AppleButton } from '@invertase/react-native-apple-authentication';
import jwtDecode from 'jwt-decode';
import Icon from 'react-native-vector-icons/AntDesign';

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
      <View>
        <TouchableOpacity onPress={() => onAppleButtonPress()}>
          <View style={styles.appleButton}>
            <Icon name="apple1" size={18} color="white" style={styles.appleIcon}/> 
            <Text style={styles.appleButtonText}>
              Apple로 계속하기
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
}


const styles = StyleSheet.create({
  appleButton: {
    width: 300,
    height: 48,
    marginTop: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  appleIcon: {
    position: 'absolute',
    left: 20,
  },
  appleButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  }
});

export default AppleLoginBtn;