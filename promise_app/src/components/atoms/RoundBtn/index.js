import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const RoundBtn = (props)=>{
    return (
        <TouchableOpacity style={styles.button} onPress={props.func}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};

export default RoundBtn;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#A3BED7',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        marginBottom: 20,
        marginRight: 20,
        borderRadius: 35,
        position: 'absolute',
        right: 0, 
        bottom: 0,


        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0,0.2)',
                shadowOpacity: 1,
                shadowOffset: {height: 2, width: 2},
                shadowRadius: 2,
            },

            android: {
                elevation: 0,
                marginHorizontal: 30,
            },
        })
    },

    text: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    }
});