import React, {useState} from 'react';
import {View, Text, Image, Modal, Platform} from 'react-native';
import Logo from '../../assets/Promise_Logo.png';
import GoogleLoginBtn from '../../components/GoogleLoginBtn';
import AppleLoginBtn from '../../components/AppleLoginBtn';
import SignInModal from '../../components/SignInModal';
import NicknameModal from '../../components/NicknameModal';
import PetModal from '../../components/PetModal';
import LoginBtn from '../../components/atoms/LoginBtn';
import LoginModal from '../../components/LoginModal';
import {userAPI} from '../../utils/axios';

const Login = (props) => {
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
  const [type, setType] = useState();

  const SocialSignin = async (data) => {
    if (data.email){
      setId(data.email);
      if(data.profile){ 
        setProfile(data.profile);
      }
      setType(data.type);
      const res = await userAPI.social(data.email, pw, data.type);
      if (res === 404) {
        setNickModal(true);
      }else if(res===402){
        alert('Google 계정으로 가입된 계정입니다. Google로 계속하기를 시도해주세요.');
      }else if(res===403){
        alert('Apple 계정으로 가입된 계정입니다. Apple로 계속하기를 시도해주세요.');
      }else if(res===405){
        alert('일반 계정으로 가입된 계정입니다. 일반 로그인을 시도해주세요.');
      }else{
        props.navigation.replace('appscreen');
      }
    }
  };

  const handleUser = (user) => {
    setId(user.id);
    setPw(user.pw);
    setType(0);
  };

  const resultData = async() =>{
    try{
      await userAPI.join(id, pw, nick, profile, petName, type);
      if(type===0){
        await userAPI.login(id, pw, type)
        .then((res) =>{
          props.navigation.replace('appscreen');
        });
      }else if(type===1 || type===2){
        await userAPI.social(id, pw, type)
        .then((res) =>{
          props.navigation.replace('appscreen');
        });
      }
      
    }catch(e){
      console.log(e);
    }
  };

  const NomalLogin = async (data) =>{
    const res = await userAPI.login(data.id, data.pw, 0);
    if(res===404){
      alert('존재하지 않는 계정입니다.');
    }else if(res===402){
      alert('Google 계정으로 가입된 계정입니다. Google로 계속하기를 시도해주세요.');
    }else if(res===403){
      alert('Apple 계정으로 가입된 계정입니다. Apple로 계속하기를 시도해주세요.');
    }else if(res===401){
      alert('잘못된 비밀번호입니다.');
    }else{
      props.navigation.replace('appscreen');
    }
  }

  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
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
          <AppleLoginBtn data={(data) => SocialSignin(data)} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 300}}>
            <LoginBtn title='로그인' func={()=>setLoginModal(true)}/>
            <LoginBtn title='이메일 회원가입' func={()=>setUserModal(true)}/>
          </View> 
        </View>
      )}
      <Modal animationType={'fade'} transparent={true} visible={loginModal}>
        <LoginModal user={(data)=>NomalLogin(data)} next={(data)=>setLoginModal(data)} exit={(data)=>setLoginModal(data)}/>
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