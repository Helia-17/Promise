import React, { Component, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';


// class Test extends Component {
//   constructor(props, context) {
//     super(props, context);
//   }
const Test = ({nickname, onChangeNickname}) => {
  // const [userInputs, setUserInputs] = useState({
  //   userEmail: null,
  //   userNickname: null,
  //   userProfileUrl: null,
  //   petName: null,
  //   petType: null
  // });

  // const SignUp = function () {
  //   // 회원가입 요청
  //   axios.post('http://localhost:8080/user/login', userInputs )
  //     .then((res) => {
  //       console.log(res)
  //       if(res.status === 200){
  //         Alert.alert('회원가입에 성공하였습니다')
  //         // 회원정보 가져와 리덕스에 저장
  //       } elif (res.status === 409) {
  //         Alert.alert('이미 가입된 Email입니다')
  //       } elif (res.status === 410) {
  //         Alert.alert('다른 회원이 사용하고 계신 닉네임입니다.');
  //       } elif (res.status === 411) {
  //         Alert.alert('Email과 닉네임 모두 사용중입니다.');
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

    return (
      <View style={s.container}>
        {/* <TouchableOpacity style={s.upButton}>
          <Text style={{ fontSize: 20 }} onPress={() => this.props.countUp(1)} >유저닉네임입력</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.upButton}>
          <Text style={{ fontSize: 20 }} onPress={() => this.props.countUp(1)}>펫이름입력</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.downButton}>
          <Text style={{ fontSize: 20 }}>펫타입입력</Text>
        </TouchableOpacity> */}
        <TouchableOpacity activeOpacity={0.8} style={s.downButton}>
          <Text style={{ fontSize: 20 }} >회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={s.downButton}>
          <Text style={{ fontSize: 20 }} onPress={onChangeNickname('green')}>리덕스테스트 {nickname}</Text>
        </TouchableOpacity>
      </View>
    );
}

const s = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  upButton: {
    marginLeft: 20,
    backgroundColor: 'cyan',
    padding: 10,
    borderRadius: 20
  },
  downButton: {
    marginLeft: 20,
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 20
  }
});

export default Test;