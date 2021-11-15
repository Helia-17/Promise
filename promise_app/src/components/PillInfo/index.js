import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PillInfo = (props) => {
    
    const mediImgUrl = props.imgUrl;
    
    return (
        <View style={style.pillInfoContainer}>
            <View style={style.pillImage}>
                <Image
                    source={{ uri: `${mediImgUrl}` }}
                    style={{width: '100%', height: '100%', borderRadius:100}}
                />
            </View>
            <View style={{marginLeft:15}}>
                <Text style={{color:'black', fontWeight:'bold', fontSize:30}}>{props['name']}</Text>
                <Text style={{color:'black'}}>{props['company']}</Text>
            </View >
        </View >
    );
};

const style = StyleSheet.create({
    pillInfoContainer: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'flex-start',
        marginTop: 20,
        alignItems: 'center',
        marginLeft: 20
    },
    pillImage: {
        backgroundColor: '#C4C4C4',
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 15
    }
})
export default PillInfo;