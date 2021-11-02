import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PhamacyInfo = (props) => {
    return (
        <View style={{flexDirection: "row", width:'100%', backgroundColor:'white', marginTop:10, marginBottom:10, borderRadius:3, elevation:1}}>
            <View style={{margin:10}}>
                <Icon name='pharmacy' color='#CF422F' size={20}/>
            </View>
            <View style={{margin:5}}>
                <Text style={{color:'black', fontWeight: 'bold', fontSize:20}} >{props.name}</Text>
                <Text style={{color:'black', marginTop:5}}>{props.location}</Text>
                <Text style={{color:'black', marginTop:5}}>{props.tel}</Text>
            </View>
        </View>
    );
};
export default PhamacyInfo;