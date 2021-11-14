import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PhamacyInfo = (props) => {
    return (
        <View style={style.pharmInfoContainer}>
            <View style={style.pharmInfoTitle}>
                <View style={{flexDirection: 'row'}}>
                    <Icon name='pharmacy' color='#CF422F' size={20} />
                    <Text style={style.pharmNameText} >{props.name}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={style.pharmDistText}>{props.dist}</Text>
                </View>
            </View>
            <View style={style.pharmInfoText}>
                <Text style={{color:'black', fontSize: 14}}>{props.location}</Text>
                <Text style={{ color: 'black', fontSize: 15, marginTop: 5 }}>{props.tel}</Text>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    pharmInfoContainer: {
        width: '100%',
        backgroundColor: 'white',
        marginTop: 5,
        borderRadius: 5,
        borderColor: '#BDBDBD',
        borderWidth: 0.3,
    },
    pharmInfoTitle: {
        flexDirection: "row",
        justifyContent: 'space-between',
        margin: 10,
        marginBottom: 0,
        padding: 5,
    },
    pharmInfoText: {
        margin: 5,
        padding: 10,
    },
    pharmNameText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
    },
    pharmDistText: {
        color: 'gray',
        fontSize: 16,
        justifyContent: 'flex-end'
    }
})
export default PhamacyInfo;