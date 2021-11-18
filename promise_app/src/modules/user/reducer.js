import types from './types';

const initialState = {
    isLoggedIn: false,
    userMail: null,
    refereshToken: null,
    AccessToken: null,
    actionCode: null,
    userInfo: {
      petLevel: null,
      petName: null,
      userJoinType: null,
      userNickname: null,
      userProfileUrl: null,
    },
    pet: {
      id: null,
      name: null,
      type: null,
      level: null,
      exp: null
    },
    changeNickname: '',
    changePetname: null,
    mainAlarmList: null,
    medicineList: null,
    alarmList: null,
    alarmHistory: null,
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case types.LOGIN:
        return {
          ...state,
          isLoggedIn: true,
        };
      case types.LOGOUT:
        return {
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
        const refereshToken = action.data.refereshToken
        const userInfo = {
          petName: action.data.petName,
          petLevel: action.data.petLevel,
          userEmail: action.data.userEmail,
          userJoinType: action.data.userJoinType,
          userNickname: action.data.userNickname,
          userProfileUrl: action.data.userProfileUrl,
        }
        return {
          ...state,
          refereshToken: refereshToken,
          userInfo: userInfo
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
      case types.GET_MAIN_ALARM_LIST:
        return {
          ...state,
          mainAlarmList: action.data,
        };
      case types.GET_MEDICINE_LIST:
        return {
          ...state,
          medicineList: action.data,
        };
      case types.SAVE_ALARM_LIST:
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
        
      default:
        return state;
    }
  }
  
  export default reducer;
