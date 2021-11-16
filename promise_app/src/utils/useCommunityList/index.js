import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { getCommunityAPI } from '../../utils/axios';

function useCommunityList(pageNum) {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const { communityListCreated } = useSelector((state) => state.community.communityList)

  const sendBoard = useCallback(async () => {
    // 게시물 생성 시
    if(pageNum === 0) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      pageNum = 1
    }

    try {
      await setLoading(true);
      await setError(false);
      let res
        res = await getCommunityAPI.list(pageNum)
        console.log(res)
      // page가 1이면 다시 열었단 뜻이므로 리스트를 초기화 한 뒤 담음 (prev 리스트와 합치지 않음)
      // if (pageNum === 1) {
      //   await setList([...res.data.data]);
      //   dispatch(ActionCreator.resetCommunityListAction())
      // } else {
      //   await setList((prev) => [...new Set([...prev, ...res.data.data])]);
      // }
      
      await setHasMore(res.data.hasmore);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [pageNum]);


  useEffect(() => {
    sendBoard();
  }, [sendBoard, pageNum, ]);

  useEffect(() => {
    if(communityListCreated){
      sendBoard();
    }
  }, [sendBoard, communityListCreated]);

  return { loading, error, list, hasMore };
}

export default useCommunityList;