import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, processColor } from 'react-native';
import {LineChart, PieChart} from 'react-native-charts-wrapper';
import {getMainAlarm, getVisual} from '../../utils/axios'
import { getMainAlarmList } from '../../modules/user/actions';
import { useDispatch } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import Moment from 'moment';

const ChartPage = ({navigation}) => {

  const dispatch = useDispatch();
  const [isVisible, setIsvisible] = useState(false);
  const [alarmList, setAlarmList] = useState('');
  const [visualData, setVisualData] = useState([]);

  const gettingAlarmList = async()=>{
    setIsvisible(true);
    const result = await getMainAlarm()
    setAlarmList(result);
    dispatch(getMainAlarmList(result))
  }

  const gettingVisual = async()=>{

    let res = await getVisual()
    if (res.length > 7) {
      res = res.slice(0,7);
    }
    const tagLists = []
    res.map(item => {
      const tag = {
        value: item.tagValue,
        label: item.tagName,
      }
      tagLists.push(tag);
    })

    setVisualData(tagLists);
    setIsvisible(false);
  }

  useEffect(()=>{
    gettingAlarmList();
    gettingVisual();
    // clearnup 함수
    return () => {
      setVisualData([])
    }
  }, [])

    return (
      <View style={{flex: 1, height: '100%', paddingHorizontal: 20, paddingTop: 30}}>
        <Spinner visible={isVisible} />
        <Text style={styles.titleText}>건강한 나를 위한 '약속'</Text>
        <Text style={styles.contentText}>오늘의 약속</Text>
        <View style={styles.todayAlarm}>
        {alarmList.length != 0
        ? alarmList.map((item) => {

          const temp = [item.alarmTime1, item.alarmTime2, item.alarmTime3]
          const alarmTimeList = []
          temp.map(time => {
            if (time != null) {
              const alarmTime = Moment(time, "HHmm").format("HH:mm")
              alarmTimeList.push(alarmTime)
            }
          })
          const alarmTimes = alarmTimeList.join(', ')
          const alarmCnt = alarmTimeList.length

          return(
            <View key={item.alarmId}>
              <Text>{item.alarmTitle}</Text>
              <Text>{alarmCnt}회</Text> 
              <Text>({alarmTimes})</Text>
            </View>
          )
        })
        : <Text>등록하신 알람이 없습니다</Text>}
        </View>


        <Text style={styles.contentText}>약속 NOW</Text>
        <View style={styles.container}>
          <PieChart
            style={styles.chart}
            chartDescription={{text: ''}}
            entryLabelColor={processColor('black')} // tag name text color
            entryLabelTextSize={15} // tag name text size
            legend={{enabled:false}}  // remove description
            holeRadius={35}     // inner circle size
            holeColor={processColor('#white')} // inner circle color
            transparentCircleRadius={40}  // transparent inner circle size
            transparentCircleColor={processColor('#white')}  // transparent inner circle color
            styledCenterText={{text:'TOP 7', color: processColor('black'), size: 25}} //fontFamily: 'HelveticaNeue-Medium',
            data={{dataSets: [
              {
                values: visualData,
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
    
                  valueFormatter: "#'%'",
                  valueLineColor: processColor('black'),
                  valueLinePart1Length: 0.5,
                },

              }
          ]}}
        />
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

    // backgroundColor: 'white',

    maxHeight: 400,

    // elevation: 2,

  },
  chart: {
    flex: 1
  },
  todayAlarm: {
    flexDirection: 'row',
    height: 100,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginVertical: 8,
    color: '#333333',
    // borderRadius: 3,
    // ---* ios shadow *---
    // shadowColor: 'rgba(183, 183, 183, 0.8)',
    // shadowOffset: {
    //   width: 5,
    //   height: -5,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 18.95,
    // elevation: 2,

    backgroundColor:'#FFFFFF', 
    borderRadius:3, 
    borderColor:'#BDBDBD', 
    borderWidth:0.3
  },

  titleText: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: '800',
    paddingVertical: 8,
  },
  contentText: {
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 20,
  },
});

export default ChartPage;