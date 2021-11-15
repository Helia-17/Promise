// 첫 번째 인자로 이전의 상태를 전달받고, 두 번째 인자로는 액션을 전달받는다.
// 전달 받은 액션의 type을 통해 새로운 상태를 반환하는것이 리듀서의 역할

import types from './types';
import { getCommunityAPI } from '../../utils/axios';

/* 초기 상태 선언 */
const initialState = {
  communityList: {},
  communityListCreated: false,
  communityListUpdated: false,
  communityListDeleted: false,
  totalPageCnt: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

      case types.GET_COMMUNITY:
        return {
          ...state,
          communityList: action.data.communityDetailList,
          totalPageCnt: action.data.totalPageCnt
        };
      
      case types.CREATE_COMMUNITY_LIST:
        return {
          ...state,
          communityListCreated: true,
        };

      case types.RESET_COMMUNITY_LIST:
        return {
          ...state,
          communityListCreated: false,
        };

      default:
        return state;
    }
  }
  
  export default reducer;
