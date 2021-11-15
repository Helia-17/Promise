import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PillInfo = (props) => {
    
    const mediImgUrl = props.imgUrl;
    const [mediName, setMediName] = useState('');

    const replaceMediName = () => {
        if (props['name'] && props['name'].includes('(')) {
            setMediName(props['name'].replace(/\(/g, '\n('));
        } else {
            setMediName(props['name']);
        }
    }

    useEffect(() => {
        replaceMediName();
    }, [props['name']]);

    return (
        <View style={style.pillInfoContainer}>
            <View style={{ alignItems: 'center', marginBottom: 10 }}>
                {mediImgUrl != '' ? (
                    <View style={style.pillImage}>
                        <Image
                            source={{ uri: `${mediImgUrl}` }}
                            style={{width: '100%', height: '100%', borderRadius:5}}
                        />
                    </View>
                ):(null)}
                
            </View>
            <View style={style.pillInfoText}>
                <Text style={style.pillInfoName}>{mediName}</Text>
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
        width: 270,
        height: 140,
        borderRadius: 5,
    },
    pillInfoText: {
        marginTop: 10,
        alignItems: 'center',
    },
    pillInfoName: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24
    },
    pillInfoCompany: {
        color: 'black',
        marginTop: 5
    }
})
export default PillInfo;