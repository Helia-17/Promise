import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MediInfo = (props) => {
    return (
        <View style={{width:'93%', marginTop:10, backgroundColor:'white', borderRadius:3, elevation:1}}>
            <TouchableOpacity style={{width:'100%'}}>
                <View style={{flexDirection: "row", alignItems:'center', justifyContent: 'space-between', margin:15}}>
                    <Text style={{color:'black', fontWeight:'bold', fontSize:18}}>{props.name}</Text>
                    <Text style={{color:'black'}}>{props.date}</Text>
                </View>
                <Text style={{marginLeft:15, marginRight:15, marginBottom:15, color:'black'}}>{props.pillList}</Text>
            </TouchableOpacity>
        </View>
    );
};
export default MediInfo;