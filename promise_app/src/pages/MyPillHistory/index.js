import React, {useCallback, useState} from 'react';
import { useFocusEffect } from '@react-navigation/core';
import { View, StyleSheet, FlatList } from 'react-native';
import MyPillHistoryList from '../../components/MyPillHistory';
import Moment from 'moment';
import { getMyPillHistoryAPI } from '../../utils/axios';
import Spinner from 'react-native-loading-spinner-overlay';

const MyPillHistory = ({navigation}) => {
  const [historyList, setHistoryList] = useState([]);
  const [totalPageCnt, setTotalPageCnt] = useState();
  const [pageNum, setPageNum] = useState(1);
  const [spinVisible, setSpinvisible] = useState();
  const [loading, setloading] = useState(false);
    
    const getMyPillHistoryList = async () => {
      setloading(true);
      setSpinvisible(true);
      const res = await getMyPillHistoryAPI(pageNum);
      setHistoryList(historyList.concat(res.alarmHistoryList));
      setPageNum(pageNum + 1);
      setTotalPageCnt(res.totalPageCnt);
      setloading(false);
      setSpinvisible(false);
    }
    
    const getHistoryList = (data) => {
      let result = [];
      let cnt = 1;
      data.map((item) => {
        item.alarmMediList.map((i)=>{
          result.push({id:cnt , alarmId:item.alarmId, mediinfo:i, date:Moment(item.thTime).format('YYYY.MM.DD HH:mm'), memo:item.alarmTitle});
          cnt += 1;
        });
      })
      return result;
    }

    useFocusEffect(
      useCallback(()=>{
        getMyPillHistoryList();
      }, [])
    );
  
    const renderItem = ({ item }) => {
      return(
        <MyPillHistoryList item={item} />
      )
    };

    return (
      <View style={styles.pillHistoryContainer}>
        <Spinner visible={spinVisible} />
        <View style={styles.pillHistoryList}>
          <FlatList 
            data={getHistoryList(historyList)}
            renderItem={renderItem}
            onEndReached={() => {if(loading===false && pageNum<=totalPageCnt) getMyPillHistoryList()}}
            onEndReachedThreshold={0.4}
            keyExtractor={item => item.id}
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
    justifyContent: 'center',
    marginBottom:10
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