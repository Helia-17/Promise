import React from 'react';
import { View, Text } from 'react-native';

const WarningText = (props) => {
    return (
        <View>
            <Text style={{ fontSize: 15, fontWeight: '500', color:'black', marginRight:6, marginLeft:2}}>{props['message']}</Text>
        </View>
    );
};
export default WarningText;