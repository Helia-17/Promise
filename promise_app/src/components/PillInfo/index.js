import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PillInfo = (props) => {
    
    const mediImgUrl = props.imgUrl;
    
    return (
        <View style={style.pillInfoContainer}>
            <View style={{alignItems: 'center', marginBottom: 10}}>
                <View style={style.pillImage}>
                    <Image
                        source={{ uri: `${mediImgUrl}` }}
                        style={{width: '100%', height: '100%', borderRadius:5}}
                    />
                </View>
            </View>
            <View style={style.pillInfoText}>
                <Text style={style.pillInfoName}>{props['name']}</Text>
                <Text style={style.pillInfoCompany}>{props['company']}</Text>
            </View >
        </View >
    );
};

const style = StyleSheet.create({
    pillInfoContainer: {
        justifyContent: 'center',
        margin: 15,
        marginBottom: 10,
    },
    pillImage: {
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        width: 230,
        height: 140,
        borderRadius: 5,
    },
    pillInfoText: {
        marginTop: 5
    },
    pillInfoName: {
        color: 'black',
        width: '100%',
        fontWeight: 'bold',
        fontSize: 24
    },
    pillInfoCompany: {
        color: 'black',
        marginTop: 5
    }
})
export default PillInfo;