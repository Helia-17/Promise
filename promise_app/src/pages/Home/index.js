import React, {useState, useEffect } from 'react';
import { View, ScrollView, Text, InputText, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from '../../components/Carousel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// axios
import {myinfo} from '../../utils/axios';

// redux
import { getMyInfoAction } from '../../modules/user/actions';
import { useDispatch } from 'react-redux';


const screenWidth = Math.round(Dimensions.get('window').width);
const PAGES = [1];

const HomePage = ({navigation}) => {
    
    const dispatch = useDispatch();

    const [userInfo, setUserInfo] = useState({});

    const getMyInfo = ()=>{
        return myinfo().then(res => {
            setUserInfo(res);
            dispatch(getMyInfoAction(res))
        })
    }

    useEffect(()=>{
        getMyInfo()
      }, [])

    

    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#F9F9F9' }}>
            <Carousel
            gap={0}
            offset={0}
            pages={PAGES}
            pageWidth={screenWidth}
            />
        </View>
    );
};
export default HomePage;