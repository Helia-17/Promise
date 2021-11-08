import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const LoadingSpinner = ()=>{
    const [isVisible, setIsvisible] = useState(true);

    useEffect(()=>{
        setIsvisible(false);
    }, []);
    
    return(
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Spinner visible={isVisible} />
        </View>
    );
}

export default LoadingSpinner;