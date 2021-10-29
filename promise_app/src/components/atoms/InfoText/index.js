import React from 'react';
import { View, Text } from 'react-native';

const InfoText = (props) => {
    return (
        <View style={{marginTop:10, marginBottom:10, width: '90%',alignItems:'flex-start', marginLeft:15}}>
            <Text style={{fontSize:20, fontWeight:'bold',color:'black'}}>{props['title']}</Text>
            <Text style={{marginTop:15, color:'black'}}>{props['desc']}</Text>
        </View>
    );
};
export default InfoText;