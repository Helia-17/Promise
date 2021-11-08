import React, {useState, useEffect} from 'react';
import { View, ScrollView, Text, Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import TimeSelect from '../../components/TimeSelect';
import DateSelect from '../../components/DateSelect';
import FindUser from '../../components/FindUser';
import InputText from '../../components/InputText';
import Toggle from '../../components/Toggle';
import AlarmList from '../../components/atoms/AlarmList';
import AddPill from '../../components/AddPill';
import ShareUser from '../../components/ShareUser';

const AlarmAdd = ({navigation}) => {
    const [title, onChangeTitle] = useState('');
    const [isOn, setIsOn] = useState(false);
    const [pillList, setPillList] = useState([]);
    const [userList, setUserList] = useState([]);
    const [tag, setTag] = useState('');
    const [pillId, setPillId] = useState(0);
    const [isChange, setIsChange] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectTime, setSelectTime] = useState('');

    const addList = (pillName) =>{
        if(pillName){
            setPillList([
                ...pillList,
                {id:pillId, name:pillName},
            ]);
            setPillId(pillId+1);
        }else{
            alert('약 정보를 입력해주세요.');
        }
        setIsChange(true);
    };

    const addUser = (selectUser)=>{
        if(selectUser.id){
            let flag = false;
            for(let i = 0; i<userList.length;i++){
                if (userList[i].id == selectUser.id){
                    flag = true;
                    break;
                }
            }
            if(flag===false){
                setUserList([
                    ...userList,
                    {id:selectUser.id, name:selectUser.name}
                ]);
            }else{
                alert('이미 추가한 사용자입니다.');
            }
            
        }else{
            alert('선택한 사용자가 없습니다.');
        }
        setModalVisible(false);
        setIsChange(true);
    };

    const removeList = (id)=>{
        setPillList(pillList.filter(pill => pill.id !== id));
        setIsChange(true);
    };

    useEffect(()=>{
        setIsChange(false);
    }, [isChange])

    const myPillList = ()=>{
        let result = [];
        if(pillList){
            pillList.map(item=>{
                result = result.concat(
                    <AlarmList item={item} remove={(data)=>removeList(data)}/>
                )
            })
        }
        return result;
    }

    const myUserList = () =>{
        let result = [];
        if(userList){
            userList.map(item=>{
                result = result.concat(
                    <AlarmList item={item} remove={(data)=>removeUserList(data)}/>
                )
            })
        }
        return result;
    }

    const removeUserList = (id)=>{
        setUserList(userList.filter(user => user.id !== id));
        setIsChange(true);
    };

    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'white' }}>
            <View style={{width:'90%', alignItems:'flex-start', marginTop:10}}>
                <Icon.Button name='left' color='black' backgroundColor='white' size={25} onPress={()=>navigation.goBack()}/>
            </View>
            <ScrollView style={{ width:'100%', margin:10}} contentContainerStyle={{alignItems: 'center', margin:10}}>
                <InputText name='복용명' result={(data)=>onChangeTitle(data)}/>
                <DateSelect selectedStart = {(data)=>setStartDate(data)} selectedEnd={(data)=>setEndDate(data)}/>
                <AddPill add = {(data)=>addList(data)}/>
                {myPillList()}
                <InputText name='태그' result={(data)=>setTag(data)}/>
                <Toggle result={(data)=>setIsOn(data)}/>
                {isOn?(
                    <View>
                        <TimeSelect selected = {(data)=>setSelectTime(data)}/>
                        <ShareUser result={(data)=>setModalVisible(data)}/>
                        {myUserList()}
                        <Modal animationType={'fade'} transparent={true} visible={modalVisible}>
                            <FindUser selected = {(data)=>addUser(data)} visible={(data)=>setModalVisible(data)}/>
                        </Modal>
                    </View>
                ):null}
                <View style={{width:'90%', margin:10}}>
                    <TouchableOpacity style={{backgroundColor:'#A3BED7', color:'black', alignItems: 'center', borderRadius: 12, height:50, justifyContent: 'center'}} onPress={()=>alert('등록이얌')}>
                        <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>등록하기</Text >
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};
export default AlarmAdd;