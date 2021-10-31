import React from 'react';
import { View, Text } from 'react-native';

const WarningText = (props) => {
    return (
        <View>
            <Text style={{ fontSize: 12, color:'black', marginRight:10, marginLeft:7}}>{props['message']}</Text>
        </View>
    );
};
export default WarningText;