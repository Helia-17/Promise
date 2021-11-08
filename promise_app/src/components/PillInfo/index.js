import React from 'react';
import { View, Text } from 'react-native';

const PillInfo = (props) => {
    return (
        <View style={{width: '100%', flexDirection: "row", justifyContent:'flex-start', marginTop:20, alignItems:'center', marginLeft:20}}>
            <View style={{backgroundColor:'#C4C4C4', width: 100, height:100, borderRadius:50, marginRight:15}}></View>
            <View style={{marginLeft:15}}>
                <Text style={{color:'black', fontWeight:'bold', fontSize:30}}>{props['name']}</Text>
                <Text style={{color:'black'}}>{props['company']}</Text>
            </View >
        </View >
);
};
export default PillInfo;