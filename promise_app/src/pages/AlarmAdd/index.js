import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import TimeSelect from '../../components/TimeSelect';
import DateSelect from '../../components/DateSelect';
import FindUser from '../../components/FindUser';
import Toggle from '../../components/Toggle';
import AlarmList from '../../components/atoms/AlarmList';
import AddPill from '../../components/AddPill';
import ShareUser from '../../components/ShareUser';
import OCRModal from '../../components/OCRModal';
import Moment from 'moment';
import PillModal from '../../components/PillModal';
import {enrollAlarm} from '../../utils/axios';

const AlarmAdd = ({navigation}) => {
  const [title, onChangeTitle] = useState('');
  const [isOn, setIsOn] = useState(false);
  const [pillList, setPillList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [ocrPillData, setOcrPillData] = useState([]);
  const [tag, setTag] = useState('');
  const [isChange, setIsChange] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [ocrModal, setOcrModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectTime1, setSelectTime1] = useState(null);
  const [selectTime2, setSelectTime2] = useState(null);
  const [selectTime3, setSelectTime3] = useState(null);

  const [shareList, setShareList] = useState([]);
  const [mediList, setMediList] = useState([]);
  const [tagList, setTagList] = useState([]);

  const addList = data => {
    if (data) {
      setPillList([...pillList, {id: data.mediSerialNum, name: data.mediName}]);
    }
    setIsChange(true);
  };

  const addUser = selectUser => {
    if (selectUser.userEmail) {
      let flag = false;
      for (let i = 0; i < userList.length; i++) {
        if (userList[i].id == selectUser.userEmail) {
          flag = true;
          break;
        }
      }
      if (flag === false) {
        setUserList([
          ...userList,
          {id: selectUser.userEmail, name: selectUser.userNickname},
        ]);
      } else {
        alert('이미 추가한 사용자입니다.');
      }
    } else {
      alert('선택한 사용자가 없습니다.');
    }
    setModalVisible(false);
    setIsChange(true);
  };

  const removeList = id => {
    setPillList(pillList.filter(pill => pill.id !== id));
    setIsChange(true);
  };

  useEffect(() => {
    setIsChange(false);
  }, [isChange]);

  const myPillList = () => {
    let result = [];
    if (pillList) {
      pillList.map(item => {
        result = result.concat(
          <AlarmList item={item} remove={data => removeList(data)} />,
        );
      });
    }
    return result;
  };

  const myUserList = () => {
    let result = [];
    if (userList) {
      userList.map(item => {
        result = result.concat(
          <AlarmList item={item} remove={data => removeUserList(data)} />,
        );
      });
    }
    return result;
  };

  const removeUserList = id => {
    setUserList(userList.filter(user => user.id !== id));
    setIsChange(true);
  };

  const addOCRList = data => {
    if (data) {
      setPillList(pillList.concat(data));
    }
    setIsChange(true);
  };

  function myMediList() {
    let result = [];
    if (pillList) {
      pillList.map(item => {
        result = result.concat(item.name);
      });
    }
    return result;
  }

  function myShareList() {
    let result = [];
    if (userList) {
      userList.map(item => {
        result = result.concat(item.name);
      });
    }
    return result;
  }

  function myTagList() {
    let result = [];
    if (tag) {
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

  const addalarm = async () => {
    let alarmYN = 0;
    if (isOn === true) {
      alarmYN = 1;
    }
    await enrollAlarm(
      title,
      alarmYN,
      selectTime1,
      selectTime2,
      selectTime3,
      myStartDate(),
      endDate,
      myMediList(),
      myTagList(),
      myShareList(),
    );
  };

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <View style={{width: '90%', alignItems: 'flex-start', marginTop: 10}}>
        <Icon.Button
          name="left"
          color="black"
          backgroundColor="white"
          size={25}
          onPress={() => navigation.goBack()}
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
            height: 50,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
              width: '20%',
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
              justifyContent: 'center',
            }}>
            <TextInput
              onChangeText={onChangeTitle}
              value={title}
              style={{
                width: '80%',
                color: 'black',
                backgroundColor: '#E9E9E9',
                borderRadius: 20,
                textAlign: 'center',
              }}
            />
          </View>
        </View>
        <DateSelect
          selectedStart={data => setStartDate(data)}
          selectedEnd={data => setEndDate(data)}
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
          />
        </Modal>
        <Modal animationType={'fade'} transparent={true} visible={ocrModal}>
          <OCRModal
            data={ocrPillData}
            selected={data => addOCRList(data)}
            visible={data => setOcrModal(data)}
          />
        </Modal>
        {myPillList()}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '90%',
            justifyContent: 'center',
            height: 50,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
              width: '20%',
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
              justifyContent: 'center',
            }}>
            <TextInput
              placeholder="나만의 태그를 #태그로 입력해주세요."
              onChangeText={setTag}
              value={tag}
              style={{
                width: '80%',
                color: 'black',
                backgroundColor: '#E9E9E9',
                borderRadius: 20,
                textAlign: 'center',
              }}
            />
          </View>
        </View>
        <Toggle result={data => setIsOn(data)} />
        {isOn ? (
          <View>
            <TimeSelect selected={data => setSelectTime1(data)} data="1" />
            <TimeSelect selected={data => setSelectTime2(data)} data="2" />
            <TimeSelect selected={data => setSelectTime3(data)} data="3" />
            <ShareUser result={data => setModalVisible(data)} />
            {myUserList()}
            <Modal
              animationType={'fade'}
              transparent={true}
              visible={modalVisible}>
              <FindUser
                selected={data => addUser(data)}
                visible={data => setModalVisible(data)}
              />
            </Modal>
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
              justifyContent: 'center',
            }}
            onPress={() => addalarm()}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              등록하기
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default AlarmAdd;
