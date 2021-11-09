import React from 'react';
import {View} from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import {GOOGLE_WEB_ID, GOOGLE_ANDROID_ID, GOOGLE_IOS_ID} from '../../utils/oauth';

GoogleSignin.configure({
    webClientId: GOOGLE_WEB_ID,
    androidClientId: GOOGLE_ANDROID_ID,
    iosClientId: GOOGLE_IOS_ID,
    offlineAccess: true,
});

const GoogleLoginBtn = (props) => {

    const GoogleLogin = async() => {
      try {
          console.log("signIn")
          await GoogleSignin.hasPlayServices()
          const userInfoDetail = await GoogleSignin.signIn();
          props.data({email: userInfoDetail.user.email, profile: userInfoDetail.user.photo})

      } catch (error) {
          console.log(error)
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
          console.log("user cancelled the login flow")
          } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
          console.log("operation (e.g. sign in) is in progress already")
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
          console.log("play services not available or outdated")
          } else {
          // some other error happened
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
        <View style={{}}>
            <GoogleSigninButton
                onPress = {GoogleLogin}
                size = {GoogleSigninButton.Size.Wide}
                color = {GoogleSigninButton.Color.Light}
                style = {{width: 300, height: 48, marginTop: 10}}
                />
        </View>
    )
}

export default GoogleLoginBtn;