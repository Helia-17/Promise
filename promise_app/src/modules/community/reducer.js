import types from './types';

const initialState = {
  communityList: [],
  communitySearchList: [],
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
  searchKeyword: '',
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

      case types.GET_COMMUNITY_SEARCH:
        
        let SearchHasMore
        action.data.totalPageCnt === 1
        ? SearchHasMore = false
        : SearchHasMore = true
        return {
          ...state,
          communitySearchList: action.data.communityDetailList,
          totalPageCnt: action.data.totalPageCnt,
          hasMore: SearchHasMore,
          pageNum: 1,
          searchKeyword: action.data.searchKeyword
        };

      case types.GET_MORE_COMMUNITY_SEARCH:
        return {
          ...state,
          communitySearchList: action.data.communityDetailList,
          totalPageCnt: action.data.totalPageCnt,
          hasMore: action.data.hasMore,
          pageNum: action.data.pageNum,
        };

      case types.RESET_COMMUNITY_SEARCH_VALUE:
        return {
          ...state,
          searchKeyword: ''
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
