import React from 'react';
import { View } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const ElderlyWarningIcon = () => {
    return (
        <View style={{marginLeft:3, marginRight:3}}>
            <AntIcon name='exclamationcircle' color='#3C80D0' backgroundColor='white' size={20}/>
        </View>
    );
};
export default ElderlyWarningIcon;