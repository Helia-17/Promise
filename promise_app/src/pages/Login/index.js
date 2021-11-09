import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import appleAuth, { AppleButton } from '@invertase/react-native-apple-authentication';
import jwtDecode from 'jwt-decode';
import Logo from '../../assets/Promise_Logo.png';

GoogleSignin.configure({
  // 숨겨야할 정보: webClientId, androidClientId, iosClientId
  webClientId: '82314462051-h7k16fkq06mct82meic3cav3o5lub21r.apps.googleusercontent.com',
  androidClientId: '82314462051-3fhhej98qvu1hrlkith0s9afqv1f8voq.apps.googleusercontent.com',
  iosClientId: '82314462051-oem6e03vfa5jo412gpfqbn5h2bgqtrrg.apps.googleusercontent.com',
  offlineAccess: true,
})

const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userProfile, setUserProfile] = useState('');
    const [userInfo, setUserInfo] = useState('');

    const GoogleLogin = async() => {
      try {
          console.log("signIn")
          await GoogleSignin.hasPlayServices()
          const userInfoDetail = await GoogleSignin.signIn();
          console.log(userInfo)

          // 여기가 결과야~
          setUserInfo(userInfoDetail);
          setUserEmail(userInfoDetail.user.email)
          setUserProfile(userInfoDetail.user.photo)
          // 여기가 결과야~

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

      }
    }
    // // 코드 상에서 사용되지는 않지만 이후 사용 가능성 있음
    // isSignedIn = async () => {
    //   const isSignedIn = await GoogleSignin.isSignedIn();
    //   this.setState({ isLoginScreenPresented: !isSignedIn });
    // };

    // // 코드 상에서 사용되지는 않지만 이후 사용 가능성 있음
    // getCurrentUser = async () => {
    //   const currentUser = await GoogleSignin.getCurrentUser();
    //   this.setState({ currentUser });
    // };

    const signOut = async () => {
      console.log("signOut")
      try {
        setUserInfo('');
        setUserEmail('')
        setUserProfile('')

        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        // this.setState({ user: null }); // Remember to remove the user from your app's state as well
        // user = null
      } catch (error) {
        console.error(error);
      }
    };

    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'space-around'}}>
            
            <View style={{justifyContent: 'center'}}>
              <Image source={Logo} style={{height: '50%'}} resizeMode='contain'/>
              <Text style={{fontSize: 25, color:'black', fontWeight:'bold', marginTop:'5%'}}>더 건강한 나를 위한 약속</Text>
            </View>
            {Platform.OS==='android'?(
              <View style={{alignItems: 'center'}}>
                <GoogleSigninButton
                onPress = {GoogleLogin}
                size = {GoogleSigninButton.Size.Wide}
                color = {GoogleSigninButton.Color.Dark}
                style = {{width: 300, height: 48, marginTop: 10}}
                />
                <TouchableOpacity style={{height:48, justifyContent: 'center'}}>
                  <Text style={{textDecorationLine: 'underline'}}>이메일로 회원가입하기</Text>
                </TouchableOpacity>
              </View>
            ):(
              // OS일 경우 넣어주십셔
              <View style={{alignItems: 'center'}}>
                <GoogleSigninButton
                onPress = {GoogleLogin}
                size = {GoogleSigninButton.Size.Wide}
                color = {GoogleSigninButton.Color.Dark}
                style = {{width: 300, height: 48, marginTop: 10}}
                />
                <TouchableOpacity onPress={() => onAppleButtonPress()}>
                  <Text>애플로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:48, justifyContent: 'center'}}>
                  <Text style={{textDecorationLine: 'underline'}}>이메일로 회원가입하기</Text>
                </TouchableOpacity>
              </View>
            )}
            {/* <Text>userEmail : {userEmail}</Text>
            <Text>userProfile :</Text>
            <Image
            style = {{width: 200, height: 200, marginBottom: 80}}
            source = {{uri: userProfile}}
            />

          <View>
            {userEmail === '' && <Text>You are currently logged out</Text>}
            {userEmail !== '' && 
            <Button onPress={signOut}
            title = "SignOut"
            style = {{width: '192px', height: '48', marginTop: 20}}
            >
            </Button>}
          </View> */}
          
        </View>
    )
}

export default Login;