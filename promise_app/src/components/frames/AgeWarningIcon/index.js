import React from 'react';
import { View } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const AgeWarningIcon = () => {
    return (
        <View style={{marginLeft:3, marginRight:3}}>
            <AntIcon name='exclamationcircle' color='#F2A737' backgroundColor='white' size={20} />
        </View>
    );
};
export default AgeWarningIcon;