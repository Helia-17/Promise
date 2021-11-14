import React from 'react';
import {View, Platform, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
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
          console.log(error)
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log("user cancelled the login flow")
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log("operation (e.g. sign in) is in progress already")
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log("play services not available or outdated")
          } else {
            console.log("some other error happened")
          }
      }
    }

    // const signOut = async () => {
    //   console.log("signOut")
    //   try {
    //     setUserInfo('');
    //     setUserEmail('')
    //     setUserProfile('')

    //     await GoogleSignin.revokeAccess();
    //     await GoogleSignin.signOut();
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

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
                    <TouchableOpacity onPress={() => GoogleLogin} style={styles.GoogleButton}>
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