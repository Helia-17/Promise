import React from 'react';
import { View, Text } from 'react-native';

const MediInfo = (props) => {
    return (
        <View style={{width:'93%', margin:15, backgroundColor:'white', borderRadius:3, elevation:1}}>
            <View style={{flexDirection: "row", alignItems:'center', justifyContent: 'space-between', margin:15}}>
                <Text style={{color:'black', fontWeight:'bold', fontSize:18}}>{props.name}</Text>
                <Text style={{color:'black'}}>{props.date}</Text>
            </View>
            <Text style={{marginLeft:15, marginRight:15, marginBottom:15, color:'black'}}>{props.pillList}</Text>
        </View>
    );
};
export default MediInfo;