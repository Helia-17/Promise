import React from 'react';
import { View, Text } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const InfoWarining = (props) => {
    return (
        <View style={{flexDirection: "row", justifyContent:'center', alignItems:'center', width:100, height:30, backgroundColor:`${props['color']}`, borderRadius:20, marginLeft: 5, marginRight:5}}>
            <AntIcon name='exclamationcircle' color='white' size={20}/>
            <Text style={{color:'white', marginLeft:7}}>{props['name']}</Text>
        </View>
    );
};
export default InfoWarining;