import React, {useState, useLayoutEffect} from 'react';
import { View, ScrollView, Platform, StyleSheet, Text } from 'react-native';
import MediInfo from '../../components/atoms/MediInfo';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/AntDesign';
import { getPeriod } from '../../utils/axios';

const Timeline = () => {
    const [value, setValue] = useState('week');
    const [platform, setPlatform] = useState();
    const [alarmList, setAlarmList] = useState([]);

    function findPlatform(){
        let result = [];
        if (platform==='android'){
            result = result.concat(
                <View style={{width:'42%', backgroundColor:'white', borderRadius:20, height:35, margin:10, marginRight:0, justifyContent: 'center'}}>
                    <RNPickerSelect
                        value={value}
                        onValueChange={(value)=>gettingList(value)} 
                        items={[
                            {label:'이번 주', value:'week'},
                            {label:'이번 달', value:'month'},
                            {label:'최근 3개월', value:'3month'}
                        ]}
                        placeholder={{label:'범위를 선택해주세요.'}}
                        style={{inputAndroid:{color:'black'}}}
                    />
                </View>
            );
        }
        
        if (platform==='ios'){
            result = result.concat(
                <View style={styles.pickerView}>
                    <RNPickerSelect
                        doneText={"확인"}
                        value={value}
                        onValueChange={(value)=>gettingList(value)} 
                        items={[
                            {label:'이번 주', value:'week'},
                            {label:'이번 달', value:'month'},
                            {label:'최근 3개월', value:'3month'}
                        ]}
                        placeholder={{label:'범위를 선택해주세요.'}}
                        Icon={()=>{
                            return <Icon color='black' name='down' size={15} />
                        }}
                    />
                </View>
            );
        }
        return result;
    }

    const gettingList = async(value) => {
        setValue(value);
        let type = 1;
        if (value === 'week'){
            type = 1;
        }else if (value === 'month'){
            type = 2;
        }else if (value === '3month'){
            type = 3;
        }
        const result = await getPeriod(type);
        setAlarmList(result);
    }

    useLayoutEffect(()=>{
        if (Platform.OS === 'android'){
            setPlatform('android');
        }
        if (Platform.OS === 'ios'){
            setPlatform('ios');
        }
    });

    const mediInfoList = ()=>{
        let result = [];
        if(alarmList.length>0){
            alarmList.map(item=>{
                result = result.concat(
                    <MediInfo alarmId={item.alarmId} alarmDayStart={item.alarmDayStart} alarmTitle = {item.alarmTitle} alarmDayEnd = {item.alarmDayEnd}/>
                );
            })
        }
        return result;
    }

    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            <View style={styles.pickerLayout}>
                {findPlatform()}
            </View>
            {alarmList.length>0?(
                <ScrollView style={{ width:'100%', margin:10}} contentContainerStyle={{alignItems: 'center'}}>
                    {mediInfoList()}
                </ScrollView>
            ):(
                <View style={{ flex: 1, alignItems: 'center', justifyContent:'center' }}>
                    <Text style={{fontSize:25, color:'gray'}}>해당되는 알람이 없습니다.</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    pickerLayout: {
        width: '90%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    pickerView: {
        width: '35%',
        justifyContent:'center',
        backgroundColor: 'white',
        borderWidth: 0.2,
        borderColor: '#bfbfbf',
        borderRadius: 5,
        height: 40,
        margin: 15,
        marginBottom: 0,
        marginRight: 0,
        paddingLeft: 10,
        paddingRight:10,
    },
    
})

export default Timeline;