import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import appleAuth from '@invertase/react-native-apple-authentication';
import jwtDecode from 'jwt-decode';
import Icon from 'react-native-vector-icons/AntDesign';

const AppleLoginBtn = (props) => {
    
    async function onAppleButtonPress() {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });
      const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
      if (credentialState === appleAuth.State.AUTHORIZED) {
        const decodedToken = jwtDecode(appleAuthRequestResponse.identityToken);
        const userEmail = decodedToken.email;
        props.data({email:userEmail, type:2});
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