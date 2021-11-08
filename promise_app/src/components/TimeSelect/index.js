import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const TimeSelect = (props) => {
    const [selectTime, setSelectTime] = useState('');
    const [isTimeVisible, setIsTimeVisible] = useState(false);

    const ConfirmTime = (time) =>{
        setSelectTime(Moment(time).format('HH:mm'));
        setIsTimeVisible(false);
        props.selected(Moment(time).format('HH:mm'));
    }

    return (
        <View style={{flexDirection: "row", alignItems: 'center', width:'90%', justifyContent: 'center', height:50}}>
            <Text style={{ fontSize:15, color:'black', fontWeight:'bold', width:'20%'  }}>알람 시간</Text>
            <View style={{flexDirection: "row",width:'78%', backgroundColor:'#E9E9E9', height:40, borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity style={{width:'45%',color:'black', backgroundColor: '#E9E9E9', borderRadius: 20, alignItems: 'center', justifyCotent:'center'}} onPress={()=>setIsTimeVisible(true)}>
                    <Text style={{color:'black'}}>{selectTime}</Text>
                </TouchableOpacity>
            </View>
            <DateTimePickerModal
                isVisible={isTimeVisible}
                mode="time"
                onConfirm={ConfirmTime}
                onCancel={()=>setIsTimeVisible(false)}
            />
        </View>
    );
};
export default TimeSelect;