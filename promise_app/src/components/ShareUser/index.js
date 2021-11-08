import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ShareUser = (props) => {
    const handleBtn = (res) => {
        props.result(res);
    }

    return(
        <View style={{flexDirection: "row", alignItems: 'center', width:'90%', justifyContent: 'center', height:50}}>
            <Text style={{ fontSize:15, color:'black', fontWeight:'bold', width:'20%'  }}>공유</Text>
            <TouchableOpacity style={{flexDirection: "row",width:'78%', backgroundColor:'#E9E9E9', height:40, borderRadius: 20, alignItems: 'center', justifyContent: 'center'}} onPress={()=>handleBtn(true)} >
                <Icon name='plus' size={17} color='black' backgroundColor='#E9E9E9' />
            </TouchableOpacity>
        </View>
    );
};
export default ShareUser;