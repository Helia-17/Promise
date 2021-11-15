import React from 'react';
import {View, Platform, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import { GOOGLE_WEB_ID, GOOGLE_ANDROID_ID, GOOGLE_IOS_ID } from '../../utils/oauth';

GoogleSignin.configure({
    webClientId: GOOGLE_WEB_ID,
    androidClientId: GOOGLE_ANDROID_ID,
    iosClientId: GOOGLE_IOS_ID,
    offlineAccess: true,
});

const GoogleLoginBtn = (props) => {

    const GoogleLogin = async() => {
      try {
          await GoogleSignin.hasPlayServices()
          const userInfoDetail = await GoogleSignin.signIn();
          props.data({email: userInfoDetail.user.email, profile: userInfoDetail.user.photo, type:1})

      } catch (error) {
          
      }
    }

    return (
        <View>
            {Platform.OS==='android'?(
                <View>
                    <GoogleSigninButton
                    onPress = {GoogleLogin}
                    size = {GoogleSigninButton.Size.Wide}
                    color = {GoogleSigninButton.Color.Light}
                    style = {{width: 300, height: 48, marginTop: 10}}
                    />
                </View>
            ):(
                <View>
                    <TouchableOpacity onPress={() => GoogleLogin()} style={styles.GoogleButton}>
                        <Image source={require('../../assets/Icon_Google.png')} style={ styles.GoogleIcon}/> 
                        <Text style={styles.GoogleButtonText}>
                            Google로 계속하기
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    GoogleButton: {
        width: 300,
        height: 48,
        marginTop: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: '#888',
        borderWidth: 0.2,
    },
    GoogleIcon: {
        position: 'absolute',
        left: 20,
        width: 18,
        height: 18,
    },
    GoogleButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#444',
    }
});

export default GoogleLoginBtn;