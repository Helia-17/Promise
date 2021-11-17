import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { getCommunityAPI } from '../axios';

const useCommunity = (communityList, askPage, totalPageCnt) => {
  let communityDetailList
  let hasMore
  let totalPages = totalPageCnt
  let pageNum = askPage + 1
  
  const getCommunity = async (pageNum) => {
      await getCommunityAPI.list(pageNum).then(res => {
        communityDetailList = communityList.concat(res.communityDetailList)  
        totalPages = res.totalPageCnt
        pageNum === res.totalPageCnt
        ? hasMore = false
        : hasMore = true
      })

      return {communityDetailList, hasMore, totalPages, pageNum}

  }
  const result = getCommunity(pageNum)
  return result

}

export default useCommunity;