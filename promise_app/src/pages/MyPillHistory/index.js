import React, {useCallback, useState} from 'react';
import { useFocusEffect } from '@react-navigation/core';
import { View, StyleSheet, FlatList } from 'react-native';
import MyPillHistoryList from '../../components/MyPillHistory';
import { getMyPillHistoryAPI } from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyPillHistory = ({navigation}) => {

  const list = [
    {
      id: 1,
      mediinfo: {
        name: '타이레놀',
        company: '(주)한국얀센'
      },
      date: '2021.10.18 04:34',
      memo: '삼성병원허리통증약'
    },
    {
      id: 2,
      mediinfo: {
        name: '타이레놀',
        company: '(주)한국얀센'
      },
      date: '2021.10.18 04:34',
      memo: '삼성병원허리통증약'
    },
    {
      id: 3,
      mediinfo: {
        name: '타이레놀',
        company: '(주)한국얀센'
      },
      date: '2021.10.18 04:34',
      memo: '삼성병원허리통증약'
    },
    {
      id: 4,
      mediinfo: {
        name: '타이레놀',
        company: '(주)한국얀센'
      },
      date: '2021.10.18 04:34',
      memo: '삼성병원허리통증약'
    },
  ];
  const [historyList, setHistoryList] = useState([]);
  const [totalPageCnt, setTotalPageCnt] = useState();
  const [pageNum, setPageNum] = useState(1);
    
    const getMyPillHistoryList = async () => {
      const res = await getMyPillHistoryAPI(pageNum);
      console.log("History : ", res);
      console.log("res type : ", typeof res);
      setHistoryList(historyList.concat(res));
      setPageNum(pageNum + 1);
      setTotalPageCnt(res.totalPageCnt);
      console.log(totalPageCnt);
    }
    
    useFocusEffect(
      useCallback(()=>{
        getMyPillHistoryList();
      }, [])
    );
  
    const renderItem = ({ item }) => (
      <MyPillHistoryList item={item}/>
    );

    return (
      <View style={styles.pillHistoryContainer}>
        <View style={styles.pillHistoryList}>
          <FlatList
            data={historyList}
            // renderItem={renderItem}
            onEndReached={() => getMyPillHistoryList()}
            keyExtractor={item => item.alarmId}
          />
        </View>
      </View>
    );
};


const styles = StyleSheet.create({
  pillHistoryContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  pillHistoryList: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  pillHistoryItem: {
    borderRadius:5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'red',
  },
})
export default MyPillHistory;