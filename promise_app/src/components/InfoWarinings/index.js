import React from 'react';
import { StyleSheet, View } from 'react-native';
import InfoWarining from '../atoms/InfoWarning';

const InfoWarinings = (props) => {

    return (
        <View style={style.warningContainer}>
            {props.ageCare == 1 ? (
                <InfoWarining color='#F2A737' name='연령' />
            ) : (null)}
            {props.pregnancyCare == 1 ? (
                <InfoWarining color='#EA6D6D' name='임산부'/>
            ): (null)}
            {props.elderlyCare == 1 ? (
                <InfoWarining color='#3C80D0' name='노약자'/>
            ): (null)}
        </View>
    );
};

const style = StyleSheet.create({
    warningContainer: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 10
    }
})
export default InfoWarinings;