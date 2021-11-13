import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MediInfo = (props) => {
    return (
        <View style={{width:'93%', marginTop:10, backgroundColor:'white', borderRadius:3, elevation:1}}>
            <TouchableOpacity style={{width:'100%', height:80, justifyContent: 'center'}} onPress={()=>console.log(props.alarmId)}>
                <View style={{flexDirection: "row", alignItems:'center', justifyContent: 'space-between', margin:15}}>
                    <Text style={{color:'black', fontWeight:'bold', fontSize:18}}>{props.alarmTitle}</Text>
                    <Text style={{color:'black'}}>{props.alarmDayStart} ~ {props.alarmDayEnd}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
export default MediInfo;