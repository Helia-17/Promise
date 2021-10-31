import React from 'react';
import { View, Text } from 'react-native';
import AgeWarningIcon from '../frames/AgeWarningIcon';
import ElderlyWarningIcon from '../../components/frames/ElderlyWarningIcon';
import PregnantWarningIcon from '../../components/frames/PregnantWarningIcon';
import WarningText from '../../components/atoms/WarningText';

const SearchResult = (props) => {
    return (
        <View style={{ width:'100%', alignItems: 'flex-start', marginLeft:'10%'}}>
            <Text style={{ fontSize:20, fontWeight:'bold', color:'black' }}>{props['query']} 검색 결과입니다.</Text>
            <View style={{ width:'100%', alignItems: 'center', flexDirection: "row", justifyContent: 'flex-start', marginTop:'1%'}}>
                <AgeWarningIcon/>
                <WarningText message='연령 주의'/>
                <PregnantWarningIcon/>
                <WarningText message='임산부 주의' />
                <ElderlyWarningIcon/>
                <WarningText message='노약자 주의' />
            </View>
        </View>
);
};
export default SearchResult;