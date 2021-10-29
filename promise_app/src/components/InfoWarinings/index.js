import React from 'react';
import { View } from 'react-native';
import InfoWarining from '../atoms/InfoWarning';

const InfoWarinings = (props) => {
    return (
        <View style={{width: '100%', flexDirection: "row", justifyContent:'flex-start', marginTop:20, marginBottom:10, alignItems:'center', marginLeft: 10}}>
            <InfoWarining color='#F2A737' name='연령'/>
            <InfoWarining color='#EA6D6D' name='임산부'/>
            <InfoWarining color='#3C80D0' name='노약자'/>
        </View>
    );
};
export default InfoWarinings;