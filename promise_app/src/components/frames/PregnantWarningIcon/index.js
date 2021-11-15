import React from 'react';
import { View } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const PregnantWarningIcon = () => {
    return (
        <View style={{marginLeft:3, marginRight:3}}>
            <AntIcon name='exclamationcircle' color='#EA6D6D' backgroundColor='white' size={20}/>
        </View>
    );
};
export default PregnantWarningIcon;