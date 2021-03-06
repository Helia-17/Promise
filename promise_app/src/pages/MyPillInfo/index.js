import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import InfoText from '../../components/atoms/InfoText';
import InfoWarinings from '../../components/InfoWarinings';
import PillInfo from '../../components/PillInfo';
import { getMediDetailAPI } from '../../utils/axios';
import Icon from 'react-native-vector-icons/AntDesign';
import Spinner from 'react-native-loading-spinner-overlay';

const MyPillInfo = (props) => {
    const [mediDetail, setMediDetail] = useState([]);
    const [spinVisible, setSpinvisible] = useState();

    const getMediDetail = async () => {
        setSpinvisible(true);
        const res = await getMediDetailAPI(props.route.params.serialNumber);
        setMediDetail(res);
        setSpinvisible(false);
    }

    useEffect(() => {
        getMediDetail();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#F9F9F9' }}>
            <Spinner visible={spinVisible} />
            <View style={{width: '90%', alignItems: 'flex-start', marginTop: 10}}>
                <Icon.Button
                name="left"
                color="black"
                backgroundColor="#F9F9F9"
                size={25}
                onPress={() => props.navigation.goBack()}
                />
            </View>
            <View style={style.pillInfoCard}>
                <PillInfo
                    name={mediDetail.mediName}
                    company={mediDetail.mediCompany}
                    imgUrl={mediDetail.mediImgUrl}
                />
                <InfoWarinings
                    ageCare={mediDetail.mediAgeCare}
                    pregnancyCare={mediDetail.mediPregnancyCare}
                    elderlyCare={mediDetail.mediElderlyCare}
                />
            </View>
                {mediDetail.mediIngredient == '' && 
                mediDetail.mediEfficacy == '' &&
                mediDetail.mediTakeWay == '' &&
                mediDetail.mediStoreWay == '' &&
                mediDetail.mediPrecautionsBefore == '' &&
                mediDetail.mediPrecautionsAfter == '' &&
                mediDetail.mediNotWith == '' &&
                mediDetail.mediAllergy == ''
                ? (
                    <View style={{ width: '100%', height:'40%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, color: '#BBBBBB' }}>??? ?????? ?????? ?????? ????????? ????????????.</Text>
                        <Text style={{fontSize:20, color:'#BBBBBB'}}>?????? ?????? ????????? ??????????????????.</Text>
                    </View>
                    ) : (
                        <ScrollView style={style.pillDetailInfo} contentContainerStyle={{marginTop: 10, marginBottom: 10}}>
                            {mediDetail.mediIngredient ? (
                                <InfoText title='??????' desc={mediDetail.mediIngredient}/>
                            ): (null)}
                            {mediDetail.mediEfficacy ? (
                                <InfoText title='??????' desc={mediDetail.mediEfficacy}/>
                            ): (null)}
                            {mediDetail.mediTakeWay ? (
                                <InfoText title='?????? ??????' desc={mediDetail.mediTakeWay}/>
                            ): (null)}
                            {mediDetail.mediStoreWay ? (
                                <InfoText title='?????? ??????' desc={mediDetail.mediStoreWay} />
                            ): (null)}
                            {mediDetail.mediPrecautionsBefore ? (
                                <InfoText title='?????? ??? ?????? ??????' desc={mediDetail.mediPrecautionsBefore} />
                            ): (null)}
                            {mediDetail.mediPrecautionsAfter ? (
                                <InfoText title='?????? ??? ?????? ??????' desc={mediDetail.mediPrecautionsAfter} />
                            ): (null)}
                            {mediDetail.mediNotWith ? (
                                <InfoText title='?????? ?????? ????????? ?????? ??????' desc={mediDetail.mediNotWith} />
                            ): (null)}
                            {mediDetail.mediAllergy ? (
                                <InfoText title='??????????????? ?????? ?????????' desc={mediDetail.mediAllergy}/>
                            ) : (null)}
                        </ScrollView>
                    )
                }
        </View>
    );
};
const style = StyleSheet.create({
    pillDetailInfo: {
        // ???????????? ?????????
        margin: 10,
        marginTop: 0,
        // ?????????
        borderWidth: 0.3,
        borderColor: '#BBBBBB',
        borderRadius: 5,
        backgroundColor: 'white'
    },
    pillInfoCard: {
        margin: 0,
        marginBottom: 0,
    }
})
export default MyPillInfo;

