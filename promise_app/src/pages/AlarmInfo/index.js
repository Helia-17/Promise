import React, {useState, useEffect, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import { View, ScrollView, Text, Modal, TouchableOpacity, TextInput, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import TimeSelect from '../../components/TimeSelect';
import DateSelect from '../../components/DateSelect';
import Toggle from '../../components/Toggle';
import AlarmList from '../../components/atoms/AlarmList';
import AddPill from '../../components/AddPill';
import OCRModal from '../../components/OCRModal';
import DirectModal from '../../components/DirectModal';
import Moment from 'moment';
import PillModal from '../../components/PillModal';
import Notifications from '../../utils/Notifications';
import Spinner from 'react-native-loading-spinner-overlay';
import {modifyAlarm, getAlarmDetail, deleteAlarm} from '../../utils/axios';

const AlarmInfo = (props) => {
  const [spinVisible, setSpinvisible] = useState();
  const [title, onChangeTitle] = useState('');
  const [isOn, setIsOn] = useState(false);
  const [pillList, setPillList] = useState([]);
  const [ocrPillData, setOcrPillData] = useState([]);
  const [tag, setTag] = useState('');
  const [isChange, setIsChange] = useState(false);
  const [ocrModal, setOcrModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [myModal, setMyModal] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectTime1, setSelectTime1] = useState(null);
  const [selectTime2, setSelectTime2] = useState(null);
  const [selectTime3, setSelectTime3] = useState(null);
  const [originalStartDate, setOriginalStartDate] = useState('');
  const [originalEndDate, setOriginalEndDate] = useState('');
  const [originalTime1, setOriginalTime1] = useState(null);
  const [originalTime2, setOriginalTime2] = useState(null);
  const [originalTime3, setOriginalTime3] = useState(null);

  const addList = data => {
    if(data.mediName){
      setPillList([...pillList, data.mediName]);
    }
    setIsChange(true);
  };

  const removeList = id => {
    setPillList(pillList.filter((pill, index) => index !== id));
    setIsChange(true);
  };

  useEffect(() => {
    setIsChange(false);
  }, [isChange]);

  const getTagList = (tagList) =>{
    let result = '';
    if(tagList.length > 0){
      tagList.map(item=>{
            result = result + `#${item} `;
        })
    }
    return result;
  }

  const getDetail = async(id)=>{
    setSpinvisible(true);
    const result = await getAlarmDetail(id);
    onChangeTitle(result.alarmTitle);
    setPillList(result.alarmMediList);
    setStartDate(result.alarmDayStart);
    setEndDate(result.alarmDayEnd);
    setOriginalStartDate(result.alarmDayStart);
    setOriginalEndDate(result.alarmDayEnd);
    setTag(getTagList(result.tagList));
    setOriginalTime1(result.alarmTime1);
    setOriginalTime2(result.alarmTime2);
    setOriginalTime3(result.alarmTime3);
    setSelectTime1(result.alarmTime1);
    setSelectTime2(result.alarmTime2);
    setSelectTime3(result.alarmTime3);
    if(result.alarmYN===1) setIsOn(true);
    else setIsOn(false);
    setSpinvisible(false);
}

  useFocusEffect(
      useCallback(() => {
          getDetail(props.route.params.data);
      }, [])
  );

  const myPillList = () => {
    let result = [];
    let temp = [...new Set(pillList)];
    if (temp.length>0) {
      temp.map((item, index) => {
        result = result.concat(
          <AlarmList item={{name:item, id:index}} remove={data => removeList(data)} />,
        );
      });
    }
    return result;
  };

  const addOCRList = data => {
    if (data) {
      let res = [];
      data.map((item) => {
        res.push(item.name);
      })
      setPillList(pillList.concat(res));
    }
    setIsChange(true);
  };

  function myMediList() {
    let result = [];
    if (pillList.length>0) {
      pillList.map(item => {
        result = result.concat(item.name);
      });
    }
    return result;
  }

  function myTagList() {
    let result = [];
    if (tag.length>0) {
      result = tag.split('#');
    }
    return result;
  }

  function myStartDate() {
    if (startDate) {
      return startDate;
    } else {
      return Moment().format('YYYY-MM-DD');
    }
  }

  function myendDate() {
    if (endDate) {
      return endDate;
    } else {
      return Moment().format('YYYY-MM-DD');
    }
  }

  const modifyalarm = ()=>{
    Alert.alert(
      '알람 수정',
      '알람을 수정하시겠습니까?',
      [{
        text:'예',
        onPress : ()=>modifyaxios()
      },{
        text:'아니요',
        onPress: ()=>props.navigation.goBack()
      }]
    )
  };

  const deletealarm = ()=>{
    Alert.alert(
      '알람 삭제',
      '알람을 삭제하시겠습니까?',
      [{
        text:'예',
        onPress : ()=>deleteaxios()
      },{
        text:'아니요',
        onPress: ()=>props.navigation.goBack()
      }]
    )
  };

  const deleteaxios = async()=>{
    setSpinvisible(true);
    await deleteAlarm(props.route.params.data);
    deleteNotification(props.route.params.data);
    setSpinvisible(false);
    props.navigation.goBack();
  }

  const modifyaxios = async () => {
    let alarmYN = 0;
    if (isOn === true) {
      alarmYN = 1;
    }
    if(title.length>0 && (Moment(myendDate()).isSame(Moment(myStartDate()))||Moment(myendDate()).isAfter(Moment(myStartDate()))) && myMediList().length>0 && (alarmYN===0||(alarmYN===1 && (selectTime1 || selectTime2 || selectTime3)))){
      setSpinvisible(true);
      await modifyAlarm(props.route.params.data, title, alarmYN, selectTime1, selectTime2, selectTime3, myStartDate(), myendDate(), pillList, myTagList());
      deleteNotification(props.route.params.data);
      if(alarmYN===1) setNotification(props.route.params.data);
      setSpinvisible(false);
      props.navigation.goBack();
    }else if(title.length===0){
      alert('복용명을 입력해주세요.');
    }else if(Moment(myendDate()).isBefore(Moment(myStartDate()))){
      alert('종료일이 시작일보다 빠를 수 없습니다.');
    }else if(myMediList().length===0){
      alert('약 정보를 입력해주세요.');
    }else if(alarmYN===1 && (selectTime1===null && selectTime2===null && selectTime3===null)){
      alert('알람 허용시 최소 1개의 알람을 등록해주세요.');
    }
  };

  const setNotification = async(alarmId)=>{
    Moment.locale('kr');
    let nowTime = Moment().toDate();
    let cur = Moment(myStartDate()).toDate();
    let end = Moment(myendDate()).toDate();
    let hour = [];
    let minute = [];
    if(selectTime1){
      hour.push(selectTime1.substring(0,2));
      minute.push(selectTime1.substring(2,4));
    }
    if(selectTime2){
      hour.push(selectTime2.substring(0,2));
      minute.push(selectTime2.substring(2,4));
    }
    if(selectTime3){
      hour.push(selectTime3.substring(0,2));
      minute.push(selectTime3.substring(2,4));
    }
    let listSize = hour.length;

    end.setHours(Number(hour[listSize-1]));
    end.setMinutes(Number(minute[listSize-1]));
    end.setSeconds(0);

    cur.setSeconds(0);
    let medi = pillList.join(', ');
    let id = 1;
    let registerId = '';
    while (cur<=end){
      for(let idx = 0; idx<listSize; idx++){
        cur.setHours(Number(hour[idx]));
        cur.setMinutes(Number(minute[idx]));

        if (cur<nowTime){
          continue;
        }

        registerId = `${alarmId}${id}`;
        Notifications.scheduledLocalNotifications(alarmId, registerId, cur, title, medi);
        id ++;
      }
      cur = Moment(cur).add(1, 'd').toDate();
    }
  }

  const deleteNotification = (alarmId) => {
    let startDate = Moment(originalStartDate).toDate()
    let endDate = Moment(originalEndDate).toDate()

    let hour = [];
    if(originalTime1){
      hour.push(originalTime1.substring(0,2));
    }
    if(originalTime2){
      hour.push(originalTime2.substring(0,2));
    }
    if(originalTime3){
      hour.push(originalTime3.substring(0,2));
    }
    let listSize = hour.length

    let cur = startDate;
    let end = endDate;

    let id = 1
    let deleteId = ""
    while (cur <= end) {
      for (let index = 0; index < listSize; index++) {

        deleteId = `${alarmId}${id}`;
        Notifications.cancelScheduledLocalNotifications(deleteId);
        id++;
      }
      cur = Moment(cur).add(1, 'd').toDate()
    }
  }

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <Spinner visible={spinVisible} />
      <View style={{width: '90%', alignItems: 'flex-start', marginTop: 10}}>
        <Icon.Button
          name="left"
          color="black"
          backgroundColor="white"
          size={25}
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <ScrollView
        style={{width: '100%', margin: 10}}
        contentContainerStyle={{alignItems: 'center', margin: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '90%',
            justifyContent: 'center',
            height: 50
          }}>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
              width: '20%'
            }}>
            복용명
          </Text>
          <View
            style={{
              width: '78%',
              backgroundColor: '#E9E9E9',
              height: 40,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <TextInput
              onChangeText={onChangeTitle}
              value={title}
              style={{
                width: '80%',
                color: 'black',
                backgroundColor: '#E9E9E9',
                borderRadius: 20,
                textAlign: 'center'
              }}
            />
          </View>
        </View>
        <DateSelect
          selectedStart={data => setStartDate(data)}
          selectedEnd={data => setEndDate(data)}
          mydate={{start:startDate, end:endDate}}
        />
        <AddPill
          add={data => setAddModal(data)}
          ocradd={data => setOcrModal(data)}
          ocrdata={data => setOcrPillData(data)}
        />
        <Modal animationType={'fade'} transparent={true} visible={addModal}>
          <PillModal
            visible={data => setAddModal(data)}
            selected={data => addList(data)}
            my = {data=>setMyModal(data)}
          />
        </Modal>
        <Modal animationType={'fade'} transparent={true} visible={ocrModal}>
          <OCRModal
            data={ocrPillData}
            selected={data => addOCRList(data)}
            visible={data => setOcrModal(data)}
          />
        </Modal>
        <Modal animationType={'fade'} transparent={true} visible={myModal}>
          <DirectModal
            visible={data => setMyModal(data)}
            selected={data => addList(data)}
          />
        </Modal>
        {myPillList()}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '90%',
            justifyContent: 'center',
            height: 50
          }}>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
              width: '20%'
            }}>
            태그
          </Text>
          <View
            style={{
              width: '78%',
              backgroundColor: '#E9E9E9',
              height: 40,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <TextInput
              placeholder="나만의 태그를 #태그로 입력해주세요."
              placeholderTextColor = "#626262"
              onChangeText={setTag}
              value={tag}
              style={{
                width: '80%',
                color: 'black',
                backgroundColor: '#E9E9E9',
                borderRadius: 20,
                textAlign: 'center'
              }}
            />
          </View>
        </View>
        <Toggle result={data => setIsOn(data)} tog={isOn}/>
        {isOn ? (
          <View>
            <TimeSelect selected={data => setSelectTime1(data)} data="1" mytime={selectTime1}/>
            <TimeSelect selected={data => setSelectTime2(data)} data="2" mytime={selectTime2}/>
            <TimeSelect selected={data => setSelectTime3(data)} data="3" mytime={selectTime3}/>
          </View>
        ) : null}
        <View style={{width: '90%', margin: 10}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#A3BED7',
              color: 'black',
              alignItems: 'center',
              borderRadius: 12,
              height: 50,
              justifyContent: 'center'
            }}
            onPress={() => modifyalarm()}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>수정하기
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{width: '90%', margin: 10}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#f8efc7',
              color: 'black',
              alignItems: 'center',
              borderRadius: 12,
              height: 50,
              justifyContent: 'center'
            }}
            onPress={() => deletealarm()}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>삭제하기
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default AlarmInfo;
