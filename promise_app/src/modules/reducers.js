import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import communityReducer from './community/reducer';

export default combineReducers({
  user: userReducer,
  community: communityReducer,
});