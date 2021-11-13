import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PhamacyInfo = (props) => {
    return (
        <View style={style.pharmInfoContainer}>
            <View style={style.pharmInfoTitle}>
                <Icon name='pharmacy' color='#CF422F' size={20} />
                <Text style={{color:'black', fontWeight: 'bold', fontSize:20}} >{props.name}</Text>
            </View>
            <View style={style.pharmInfoText}>
                <Text style={{color:'black', marginTop:5}}>{props.location}</Text>
                <Text style={{ color: 'black', marginTop: 5 }}>{props.tel}</Text>
                <Text style={{color:'black', marginTop:5}}>{props.dist}</Text>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    pharmInfoContainer: {
        // flexDirection: "row",
        width: '100%',
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 3,
        elevation: 1,
    },
    pharmInfoTitle: {
        flexDirection: "row",
        margin: 10,
    },
    pharmInfoText: {
        margin: 5,
        padding: 10,
    }
})
export default PhamacyInfo;