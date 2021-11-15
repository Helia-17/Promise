import React, {useState, useEffect} from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, AppRegistry, processColor } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from '../../components/community/SearchBar';
import PostList from '../../components/community/PostList';
import {LineChart, PieChart} from 'react-native-charts-wrapper';

// axios
import {getAlarmlist} from '../../utils/axios'

// redux
import { saveAlarmList } from '../../modules/user/actions';
import { useDispatch } from 'react-redux';
import Moment from 'moment';

const ChartPage = ({navigation}) => {

  const dispatch = useDispatch();
    
  const [alarmList, setAlarmList] = useState([]);

  const gettingList = async()=>{
    let day = Moment().format('YYYY-MM-DD');
    const result = await getAlarmlist(day);
    setAlarmList(result);
    console.log(result)
    dispatch(saveAlarmList(result))
  }

  useEffect(()=>{
    gettingList()
  }, [])

  return (
    <View style={{flex: 1, height: '100%', paddingHorizontal: 20, paddingTop: 30}}>
      <Text style={styles.titleText}>건강한 나를 위한 '약속'</Text>
      <Text style={styles.contentText}>오늘의 약속</Text>
      <View style={styles.todayAlarm}>
        {alarmList.map((item, i) => (
          <>
            <Text key={i}>{item.alarmTitle}</Text>
          </>
        ))}
      </View>


      <Text style={styles.contentText}>약속 NOW</Text>
      <View style={styles.container}>
        {/* <PieChart 
          style={styles.chart}
          chartDescription={{text: ''}}
          entryLabelColor={processColor('black')} // tag name text color
          entryLabelTextSize={15} // tag name text size
          legend={{enabled:false}}  // remove description
          holeRadius={45}     // inner circle size
          holeColor={processColor('#white')} // inner circle color
          transparentCircleRadius={43}  // transparent inner circle size
          transparentCircleColor={processColor('#white')}  // transparent inner circle color
          styledCenterText={{text:'TOP 7', color: processColor('black'), fontFamily: 'HelveticaNeue-Medium', size: 25}}
          data={{dataSets: [
            {
              values: [
                { value: 19.672131147540984, label: '어린이' },
                { value: 18.0327868852459, label: '치질' },
                // { value: 10, label: '똥방구' },
                { value: 14.754098360655737, label: '방구' },
                // { value: 8, label: '상사병' },
                { value: 6.557377049180328, label: '두통약' },
                { value: 3.278688524590164, label: '감기' },
                { value: 3.278688524590164, label: '발열' },
                { value: 1.639344262295082, label: '몸살' }
                // { value: 1, label: '어린이감기약' }
              ],
              label: '',
              config: {
                colors: [
                  processColor('#BCD4E6'),
                  processColor('#D6E2E9'),
                  processColor('#F0EFEB'),
                  processColor('#DBE7E4'),
                  processColor('#FDE2E4'),
                  processColor('#FFF1E6'),
                  processColor('#EDDCD2')
                ],
                valueTextSize: 15,  // tag value text size
                valueTextColor: processColor('black'),
                sliceSpace: 5,  // 차트사이 간격
                selectionShift: 0,  // 박스 안 공간 0이 최대

                // 수치 밖으로 꺼내기
                // xValuePosition: "INSIDE_SLICE",
                // yValuePosition: "OUTSIDE_SLICE",
  
                valueFormatter: "#.#'%'",
                valueLineColor: processColor('black'),
                valueLinePart1Length: 0.5,
              },
            },
          ],}}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
    maxHeight: 400,
    elevation: 2,
  },
  chart: {
    flex: 1
  },
  todayAlarm: {
    height: 100,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginVertical: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    // ---* ios shadow *---
    // shadowColor: 'rgba(183, 183, 183, 0.8)',
    // shadowOffset: {
    //   width: 5,
    //   height: -5,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 18.95,
    elevation: 2,
    color: '#333333'
  },
  titleText: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: '500',
    paddingVertical: 8,
  },
  contentText: {
    fontSize: 18,
    fontWeight: '500',
    paddingTop: 20,
  },
});

export default ChartPage;