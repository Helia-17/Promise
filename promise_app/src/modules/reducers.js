// 여러개의 리듀서를 묶어 컴포넌트 파일에서 쉽게 사용할 수 있도록 해주는 역할
import { combineReducers } from 'redux';
import userReducer from './user/reducer';

export default combineReducers({
  user: userReducer
});