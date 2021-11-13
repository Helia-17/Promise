import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RoundBtn from '../../components/atoms/RoundBtn'; 

const Mypage = ({navigation}) => {
    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#F9F9F9' }}>
            <Text style={{color:'black'}}>Mypage 지롱</Text>
            <RoundBtn text='+' func={()=>navigation.navigate('마이필')}/>
        </View>
    );
};
export default Mypage;