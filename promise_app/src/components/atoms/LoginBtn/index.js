import React from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native';

const LoginBtn = (props) => {
    return (
        <View>
            {Platform.OS==='android'?(
                <TouchableOpacity style={styles.Android} onPress={props.func}>
                    <Text style={{fontSize:14, fontWeight:'bold'}} >{props.title}</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.iOS} onPress={props.func}>
                    <Text style={{fontSize:14, fontWeight:'bold'}} >{props.title}</Text>
                </TouchableOpacity>
            )}
        </View>
  )
}

const styles = StyleSheet.create({
    iOS:{
        borderRadius: 7,
        backgroundColor: '#E3E3E3',
        height: 48,
        width: 145,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Android:{
        elevation: 3,
        backgroundColor: 'white',
        height: 40,
        width: 140,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default LoginBtn;