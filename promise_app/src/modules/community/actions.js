import types from './types'

// Action 생성 함수 구현
  export const getCommunityAction = (data) => ({
    type: types.GET_COMMUNITY,
    data,
  });

//   export const getPetInfoAction = (data) => ({
//     type: types.GET_PET_INFO,
//     data,
//   });

//   export const changeNickname = (data) => ({
//     type: types.CHANGE_NICKNAME,
//     data,
//   });

// //   펫의 이름은 초기 설정 후 못바꾸게 하는 것이 좋을 듯. 어쨌든 초기 입력에 필요
//   export const changePetname = (data) => ({
//     type: types.CHANGE_PETNAME,
//     data,
//   });
  
//   export const getMedicineList = (data) => ({
//     type: types.GET_MEDICINE_LIST,
//     data,
//   });

//   export const getAlarmList = (data) => ({
//     type: types.GET_ALARM_LIST,
//     data,
//   });
  
//   export const getAlarmHistory = (data) => ({
//     type: types.GET_ALARM_HISTORY,
//     data,
//   });
  
//   export const refreshInfo = () => ({
//     type: types.REFRESH_INFO,
//   })
  
        
