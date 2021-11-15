import types from './types'

// Action 생성 함수 구현
  export const getCommunityAction = (data) => ({
    type: types.GET_COMMUNITY,
    data,
  });

  export const createCommunityListAction = () => {
    return {
      type: types.CREATE_COMMUNITY_LIST,
    }
  };
  
  export const resetCommunityListAction = () => {
    return {
      type: types.RESET_COMMUNITY_LIST,
    }
  };
  
        
