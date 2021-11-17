import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const AlarmList = (props) => {
    const replacName = (name) => {
        if (name.includes('(')) {
            return name.replace(/\(/g, '\n(');
        }
        return name
    }
    const handleRemove = (id)=>{
        props.remove(id);
    }

    return(
        <View style={{flexDirection: "row", alignItems: 'center', width:'90%', justifyContent: 'center', height:50}}>
            <Text style={{ fontSize:15, color:'black', fontWeight:'bold', width:'20%'  }}></Text>
            <View style={{flexDirection: "row",width:'78%', backgroundColor:'#E9E9E9', height:40, borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
                <Text id={props.item.id} style={{width:'72%', backgroundColor: '#E9E9E9', borderRadius: 20, textAlign: 'center', color:'black'}}>{replacName(props.item.name)}</Text>
                <Icon.Button name='closecircle' size={17} color='#FF6464' backgroundColor='#E9E9E9' onPress={()=>handleRemove(props.item.id)} style={{paddingRight:0}}/>
            </View>
        </View>
    );
};
export default AlarmList;