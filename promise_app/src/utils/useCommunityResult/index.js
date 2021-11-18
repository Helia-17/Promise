import { getCommunityAPI } from '../axios';

const useCommunityResult = (communitySearchList, askPage, totalPageCnt, searchKeyword) => {
  let communityDetailList
  let hasMore
  let totalPages = totalPageCnt
  let pageNum = askPage + 1
  
  const getCommunity = async (pageNum) => {
      await getCommunityAPI.search(pageNum, searchKeyword).then(res => {
        communityDetailList = communitySearchList.concat(res.communityDetailList)  
        totalPages = res.totalPageCnt
        pageNum === res.totalPageCnt
        ? hasMore = false
        : hasMore = true
      });

      return {communityDetailList, hasMore, totalPages, pageNum};

  }
  const result = getCommunity(pageNum);
  return result;

}

export default useCommunityResult;