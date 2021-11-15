/* 액션 타입 만들기 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어주세요.
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있습니다.
const types = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    GET_MY_INFO: 'GET_MY_INFO',
    GET_PET_INFO: 'GET_PET_INFO',
    CHANGE_NICKNAME: 'CHANGE_NICKNAME',
    CHANGE_PETNAME: 'CHANGE_PETNAME',
    GET_MAIN_ALARM_LIST: 'GET_MAIN_ALARM_LIST',
    GET_MEDICINE_LIST: 'GET_MEDICINE_LIST',
    SAVE_ALARM_LIST: 'SAVE_ALARM_LIST',
    GET_ALARM_HISTORY: 'GET_ALARM_HISTORY',
    REFRESH_INFO: 'REFRESH_INFO'
};

export default types