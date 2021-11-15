import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import InfoText from '../../components/atoms/InfoText';
import InfoWarinings from '../../components/InfoWarinings';
import PillInfo from '../../components/PillInfo';
import { getMediDetailAPI } from '../../utils/axios';

const Info = ({ route }) => {
    
    const [mediDetail, setMediDetail] = useState([]);
    
    const getMediDetail = async () => {
        const res = await getMediDetailAPI(route.params.serialNum);
        setMediDetail(res);
    }

    useEffect(() => {
        getMediDetail();
    }, []);
    
    console.log(mediDetail.mediIngredient);
    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            <ScrollView>
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
                {mediDetail.mediIngredient ? (
                    <InfoText title='성분' desc={mediDetail.mediIngredient}/>
                ): (null)}
                {mediDetail.mediEfficacy ? (
                    <InfoText title='효능' desc={mediDetail.mediEfficacy}/>
                ): (null)}
                {mediDetail.mediTakeWay ? (
                    <InfoText title='복용 방법' desc={mediDetail.mediTakeWay}/>
                ): (null)}
                {mediDetail.mediStoreWay ? (
                    <InfoText title='보관 방법' desc={mediDetail.mediStoreWay} />
                ): (null)}
                {mediDetail.mediPrecautionsBefore ? (
                    <InfoText title='복용 전 주의 사항' desc={mediDetail.mediPrecautionsBefore} />
                ): (null)}
                {mediDetail.mediPrecautionsAfter ? (
                    <InfoText title='복용 후 주의 사항' desc={mediDetail.mediPrecautionsAfter} />
                ): (null)}
                {mediDetail.mediNotWith ? (
                    <InfoText title='함께 먹지 말아야 하는 것들' desc={mediDetail.mediNotWith} />
                ): (null)}
                {mediDetail.mediAllergy ? (
                    <InfoText title='발생가능성 있는 증상들' desc={mediDetail.mediAllergy}/>
                ) : (null)}
                {mediDetail.mediIngredient == '' && 
                    mediDetail.mediEfficacy == '' &&
                    mediDetail.mediTakeWay == '' &&
                    mediDetail.mediStoreWay == '' &&
                    mediDetail.mediPrecautionsBefore == '' &&
                    mediDetail.mediPrecautionsAfter == '' &&
                    mediDetail.mediNotWith == '' &&
                    mediDetail.mediAllergy == ''
                ? (
                    <View style={{ width: '100%', height: '100%', margin: 5, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Text style={{fontSize:20, color:'#BBBBBB'}}>이 약에 대한 정보가 없습니다.</Text>
                    </View>
                ) : (
                    null
                )
                }
                <Text></Text>
                <Text></Text>
                <Text></Text>
            </ScrollView>
        </View>
    );
};
export default Info;

