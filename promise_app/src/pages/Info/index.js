import React from 'react';
import { View, ScrollView } from 'react-native';
import InfoText from '../../components/atoms/InfoText';
import InfoWarinings from '../../components/InfoWarinings';
import PillInfo from '../../components/PillInfo';

const Info = ({route}) => {
    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            <ScrollView>
                <PillInfo name={route.params.name} company={route.params.company}/>
                <InfoWarinings/>
                <InfoText title='성분' desc='아세트아미노펜, 카르나우바납,전분 글리콘산나트륨,
    스테아르산마그네슘,옥수수전분,전호화전분,
    분말셀룰로오스,오파드라이흰색(YS-1-7027)'/>
                <InfoText title='효능' desc='두통, 생리통, 치통에 효과적인 해열 진통제'/>
                <InfoText title='복용 방법' desc='식전식후 구분없이 공복에도 사용 가능'/>
                <InfoText title='보관 방법' desc='밀폐용기, 실온(1~30℃)보관'/>
            </ScrollView>
        </View>
    );
};
export default Info;