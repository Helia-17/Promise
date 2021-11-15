import React, {useState, useEffect } from 'react';
import { View,Dimensions } from 'react-native';
import Carousel from '../../components/Carousel';
import {myinfo} from '../../utils/axios';
import { getMyInfoAction } from '../../modules/user/actions';
import { useDispatch } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

const screenWidth = Math.round(Dimensions.get('window').width);
const PAGES = [1];

const HomePage = ({navigation}) => {
    
    const dispatch = useDispatch();
    const [isVisible, setIsvisible] = useState();
    const [userInfo, setUserInfo] = useState({});

    const getMyInfo = ()=>{
        setIsvisible(true);
        return myinfo()
        .then(res => {
            setIsvisible(false);
            if(res.statusCode === 420) navigation.replace('LoginScreen');
            else{
                setUserInfo(res);
                dispatch(getMyInfoAction(res));
            }
        })
    }

    useEffect(()=>{
        getMyInfo()
      }, [])

    

    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#F9F9F9' }}>
            <Spinner visible={isVisible} />
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