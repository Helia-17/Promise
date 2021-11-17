import React from 'react';
import { View, Text } from 'react-native';

const DetailList = (props) => {
    const replacName = (name) => {
        if (name.includes('(')) {
            return name.replace(/\(/g, '\n(');
        }
        return name
    }
    return(
        <View style={{flexDirection: "row", alignItems: 'center', width:'90%', justifyContent: 'center', height:50}}>
            <Text style={{ fontSize:15, color:'black', fontWeight:'bold', width:'20%'  }}></Text>
            <View style={{flexDirection: "row",width:'78%', backgroundColor:'#e4ecf3', height:40, borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{width:'72%', backgroundColor: '#e4ecf3', borderRadius: 20, textAlign: 'center', color:'#363636'}}>{replacName(props.name)}</Text>
            </View>
        </View>
    );
};
export default DetailList;