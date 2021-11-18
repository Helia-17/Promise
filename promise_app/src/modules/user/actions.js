import types from './types'

export const loginAction = (data) => ({
    type: types.LOGIN,
    data,
  });
    
  export const logoutAction = () => ({
    type: types.LOGOUT 
  });

  export const getMyInfoAction = (data) => ({
    type: types.GET_MY_INFO,
    data,
  });

  export const getPetInfoAction = (data) => ({
    type: types.GET_PET_INFO,
    data,
  });

  export const changeNickname = (data) => ({
    type: types.CHANGE_NICKNAME,
    data,
  });

  export const changePetname = (data) => ({
    type: types.CHANGE_PETNAME,
    data,
  });
  
  export const getMainAlarmList = (data) => ({
    type: types.GET_MAIN_ALARM_LIST,
    data,
  });

  export const getMedicineList = (data) => ({
    type: types.GET_MEDICINE_LIST,
    data,
  });

  export const saveAlarmList = (data) => ({
    type: types.SAVE_ALARM_LIST,
    data,
  });
  
  export const getAlarmHistory = (data) => ({
    type: types.GET_ALARM_HISTORY,
    data,
  });
  
  export const refreshInfo = () => ({
    type: types.REFRESH_INFO,
  })
  
        
