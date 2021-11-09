import React from 'react';
import {View} from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';

GoogleSignin.configure({
  // 숨겨야할 정보: webClientId, androidClientId, iosClientId
  webClientId: '82314462051-h7k16fkq06mct82meic3cav3o5lub21r.apps.googleusercontent.com',
  androidClientId: '82314462051-3fhhej98qvu1hrlkith0s9afqv1f8voq.apps.googleusercontent.com',
  iosClientId: '82314462051-oem6e03vfa5jo412gpfqbn5h2bgqtrrg.apps.googleusercontent.com',
  offlineAccess: true,
})

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