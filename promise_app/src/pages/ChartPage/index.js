import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import { View, Text, StyleSheet, processColor } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Swiper from 'react-native-swiper'
import {PieChart} from 'react-native-charts-wrapper';
import {getMainAlarm, getVisual} from '../../utils/axios'
import { getMainAlarmList } from '../../modules/user/actions';
import { useDispatch } from 'react-redux';
import Moment from 'moment';

const ChartPage = ({navigation}) => {

  const dispatch = useDispatch();
  const [alarmList, setAlarmList] = useState('');
  const [visualData, setVisualData] = useState([]);
  const [spinVisible, setSpinvisible] = useState();

  const gettingAlarmList = async()=>{
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
  }

  useFocusEffect(
    useCallback(()=>{
      setSpinvisible(true);
      gettingAlarmList();
      gettingVisual();
      setSpinvisible(false);
      return () => {
        setVisualData([])
      }
    }, [])
  );

    return (
      <View style={{flex: 1, height: '100%', paddingHorizontal: 20, paddingTop: 30}}>
        <Spinner visible={spinVisible} />
        <Text style={styles.titleText}>건강한 나를 위한 '약속'</Text>
        <Text style={styles.contentText}>오늘의 약속</Text>
        <View style={styles.swiperWrapper}>
          <Swiper horizontal={false} key={alarmList.length} showsPagination={false} autoplay={true} autoplayTimeout={3}>  
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
                  <View key={item.alarmId} style={styles.slide}>
                    <View key={item.alarmId} style={styles.alarmTitleContainer}>
                      <Text style={styles.alarmTitleText}>{item.alarmTitle}</Text>
                    </View>
                    {alarmCnt > 0
                      ? <Text style={styles.alarmTimesText}>{alarmCnt}회 ({alarmTimes})</Text>
                      : null
                    }
                  </View>
                )
              })
              :
              <View style={styles.slide}>
                <Text style={{fontSize:18, color:'#BBBBBB'}}>등록하신 알람이 없습니다</Text>
              </View>
            }
          </Swiper>
        </View>

        <Text style={styles.contentText}>약속 NOW</Text>
        <View style={styles.chartContainer}>
          <PieChart
            style={styles.chart}
            chartDescription={{text: ''}}
            entryLabelColor={processColor('black')}
            entryLabelTextSize={15}
            legend={{enabled:false}}
            holeRadius={35}
            holeColor={processColor('#white')}
            transparentCircleRadius={40}
            transparentCircleColor={processColor('#white')}
            styledCenterText={{text:'TOP 7', color: processColor('black'), size: 25}}
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
                  valueTextSize: 15,
                  valueTextColor: processColor('black'),
                  sliceSpace: 5,
                  selectionShift: 0,
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
  swiperWrapper: {
    marginTop: 10,
    height: 80,
    borderColor: '#C4D6E6',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  slide: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0.1,
    borderRadius: 20,
  },
  chartContainer: {
    flex: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    maxHeight: 400,
  },
  chart: {
    flex: 1
  },
  todayAlarm: {
    flexDirection: 'row',
    paddingVertical: 0,
    paddingHorizontal: 14,
    marginVertical: 8,
    color: '#333333',
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
  alarmTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alarmTitleText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '400'
  },
  alarmTimesText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '400'
  },
  contentText: {
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 20,
  },
});

export default ChartPage;