import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Modal, Platform} from 'react-native';
import Logo from '../../assets/Promise_Logo.png';
import GoogleLoginBtn from '../../components/GoogleLoginBtn';
import AppleLoginBtn from '../../components/AppleLoginBtn';
import SignInModal from '../../components/SignInModal';
import NicknameModal from '../../components/NicknameModal';
import PetModal from '../../components/PetModal';
import LoginBtn from '../../components/atoms/LoginBtn';
import LoginModal from '../../components/LoginModal';

const Login = () => {
  const [userModal, setUserModal] = useState(false);
  const [nickModal, setNickModal] = useState(false);
  const [petModal, setPetModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  // 일반 회원가입
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  // 공통
  const [profile, setProfile] = useState(null);
  const [nick, setNick] = useState('');
  const [petName, setPetName] = useState('');

  const SocialSignin = (data) => {
    if (data.email){
      setId(data.email);
      if(data.profile){ setProfile(data.profile);}
      setNickModal(true);
    }
  }

  const handleUser = (user) => {
    setId(user.id);
    setPw(user.pw);
  }

  const resultData = () =>{
    alert(`id : ${id},
    pw : ${pw},
    nick: ${nick},
    petName: ${petName}`);
  }

  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'space-around'}}>
      <View style={{justifyContent: 'center'}}>
        <Image source={Logo} style={{height: '50%'}} resizeMode='contain'/>
        <Text style={{fontSize: 25, color:'black', fontWeight:'bold', marginTop:'5%'}}>더 건강한 나를 위한 약속</Text>
      </View>
      {Platform.OS==='android'?(
        <View style={{alignItems: 'center'}}>
          <GoogleLoginBtn data={(data)=>SocialSignin(data)}/>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 290}}>
            <LoginBtn title='일반 로그인' func={()=>setLoginModal(true)}/>
            <LoginBtn title='일반 회원가입' func={()=>setUserModal(true)}/>
          </View>
        </View>
      ):(
        <View style={{alignItems: 'center'}}>
          <GoogleLoginBtn data={(data)=>SocialSignin(data)}/>
          <AppleLoginBtn data={(data)=>SocialSignin(data)}/>
            <TouchableOpacity style={{height:48, justifyContent: 'center'}}>
            <Text style={{textDecorationLine: 'underline'}} onPress={()=>setUserModal(true)}>이메일로 회원가입하기</Text>
          </TouchableOpacity>
        </View>
      )}
      <Modal animationType={'fade'} transparent={true} visible={loginModal}>
        <LoginModal user={(data)=>alert('로그인중')} next={(data)=>setLoginModal(data)} exit={(data)=>setLoginModal(data)}/>
      </Modal>
      <Modal animationType={'fade'} transparent={true} visible={userModal}>
        <SignInModal user={(data)=>handleUser(data)} now={(data)=>setUserModal(data)} next={(data)=>setNickModal(data)} exit={(data)=>setUserModal(data)}/>
      </Modal>
      <Modal animationType={'fade'} transparent={true} visible={nickModal}>
        <NicknameModal usernick={(data)=>setNick(data)} now={(data)=>setNickModal(data)} next={(data)=>setPetModal(data)} exit={(data)=>setNickModal(data)}/>
      </Modal>
      <Modal animationType={'fade'} transparent={true} visible={petModal}>
        <PetModal petname={(data)=>setPetName(data)} now={(data)=>setPetModal(data)} next={(data)=>resultData()} exit={(data)=>setPetModal(data)} />
      </Modal>
    </View>
  )
}

export default Login;