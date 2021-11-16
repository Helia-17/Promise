// 첫 번째 인자로 이전의 상태를 전달받고, 두 번째 인자로는 액션을 전달받는다.
// 전달 받은 액션의 type을 통해 새로운 상태를 반환하는것이 리듀서의 역할

import types from './types';
import { getCommunityAPI } from '../../utils/axios';

/* 초기 상태 선언 */
const initialState = {
  communityList: [],
  communityPostDetail: { 
    commuCommentDetailList: [],
    commuContents: '',
    commuDate: '',
    commuTitle: '',
    userNickname: ''
  },
  pageNum: null,
  hasMore:null,
  totalPageCnt: null,
  communityPostChanged: false,
  communityPostCreated: false,
  communityPostUpdated: false,
  communityPostDeleted: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

      case types.GET_COMMUNITY:
        
        let hasMore
        action.data.totalPageCnt === 1
        ? hasMore = false
        : hasMore = true
        return {
          ...state,
          communityList: action.data.communityDetailList,
          totalPageCnt: action.data.totalPageCnt,
          hasMore: hasMore,
          pageNum: 1,
        };

      case types.GET_MORE_COMMUNITY:
        return {
          ...state,
          communityList: action.data.communityDetailList,
          totalPageCnt: action.data.totalPageCnt,
          hasMore: action.data.hasMore,
          pageNum: action.data.pageNum,
        };

      case types.GET_POST_DETAIL:
        return {
          ...state,
          communityPostDetail: action.data,
        };

      case types.CHANGE_POST_DETAIL:
        return {
          ...state,
          communityPostChanged: !communityPostChanged,
        };

      case types.RESET_POST_DETAIL:
        return {
          ...state,
          communityPostDetail: {
            commuCommentDetailList: [],
            commuContents: '',
            commuDate: '',
            commuTitle: '',
            userNickname: ''
          }
        };
      
      case types.CREATE_COMMUNITY_LIST:
        return {
          ...state,
          communityPostCreated: true,
        };

      case types.RESET_COMMUNITY_LIST:
        return {
          ...state,
          communityPostCreated: false,
          communityList: []
        };

      default:
        return state;
    }
  }
  
  export default reducer;
