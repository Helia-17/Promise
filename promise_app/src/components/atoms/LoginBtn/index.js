import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';

const LoginBtn = (props) => {
    return (
        <View>
            {Platform.OS==='android'?(
                <TouchableOpacity style={{elevation: 3, backgroundColor:'white', height:40, width:140, marginTop:10, alignItems:'center', justifyContent: 'center'}} onPress={props.func}>
                    <Text style={{fontSize:14, fontWeight:'bold'}} >{props.title}</Text>
                </TouchableOpacity>
            ):null}
        </View>
  )
}

export default LoginBtn;