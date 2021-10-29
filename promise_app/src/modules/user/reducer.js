// 첫 번째 인자로 이전의 상태를 전달받고, 두 번째 인자로는 액션을 전달받는다.
// 전달 받은 액션의 type을 통해 새로운 상태를 반환하는것이 리듀서의 역할

import types from './types';

/* 초기 상태 선언 */
const initialState = {
    isLoggedIn: false,
    userMail: null,
    refereshToken: null,
    AccessToken: null,
    // true이면 회원가입 페이지로 이동 false이면 로그인을 진행해서 token을 받아왔으니 main으로
    actionCode: null,
    userInfo: {
      email: null,
      nickname: null,
      profileUrl: null,
      type: null,
      joinDate:  null,
      jointype: null,
    },
    pet: {
      id: null,
      name: null,
      type: null,
      level: null,
      exp: null
    },
    changeNickname: '아아아아악',
    changePetname: null,
    medicineList: null,
    alarmList: null,
    alarmHistory: null,
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case types.LOGIN:
        // let jwt = require('jsonwebtoken');
        // let decodedToken = jwt.decode(action.data.jwtAuthToken)
        // localStorage.setItem("userToken", action.data.jwtAuthToken);
        // localStorage.setItem("decodedToken", decodedToken);
        localStorage.setItem("isLoggedIn", true);
        return {
          ...state,
          isLoggedIn: true,
          // userToken: action.data.jwtAuthToken,
          // decodedToken: decodedToken,
        };
      case types.LOGOUT:
        // const client = StreamChat.getInstance('5gan2md896h2');
        // const disconnect = client.disconnectUser();
        // localStorage.removeItem("userToken");
        // localStorage.removeItem("decodedToken");
        localStorage.removeItem("isLoggedIn");
        return {
          // disconnect,
          ...state,
          isLoggedIn: false,
          userMail: null,
          refereshToken: null,
          AccessToken: null,
          actionCode: null,
          userInfo: {
            email: null,
            nickname: null,
            profileUrl: null,
            type: null,
            joinDate:  null,
            jointype: null,
          },
          pet: {
            id: null,
            name: null,
            type: null,
            level: null,
            exp: null
          }
        };
      case types.GET_MY_INFO:
        return {
          ...state,
          userInfo: action.data
        };
      case types.GET_PET_INFO:
        return {
          ...state,
          pet: action.data
        };
      case types.CHANGE_NICKNAME:
        return {
          ...state,
          changeNickname: action.data,
        };
      case types.CHANGE_PETNAME:
        return {
          ...state,
          changePetname: action.data,
        };
      case types.GET_MEDICINE_LIST:
        return {
          ...state,
          medicineList: action.data,
        };
      case types.GET_ALARM_LIST:
        return {
          ...state,
          alarmList: action.data,
        };
      case types.GET_ALARM_HISTORY:
        return {
          ...state,
          alarmHistory: action.data,
        };
      case types.REFRESH_INFO:
        // const refreshedUserToken = localStorage.getItem("userToken");
        // const refreshedJwt = require('jsonwebtoken');
        // const refreshedDecodedToken = refreshedJwt.decode(refreshedUserToken)
        // return {
        //   ...state,
        //   isLoggedIn: true,
        //   userToken: localStorage.getItem("userToken"),
        //   decodedToken: refreshedDecodedToken,
        // }
      default:
        return state;
    }
  }
  
  export default reducer;