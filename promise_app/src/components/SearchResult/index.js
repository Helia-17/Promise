import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AgeWarningIcon from '../frames/AgeWarningIcon';
import ElderlyWarningIcon from '../../components/frames/ElderlyWarningIcon';
import PregnantWarningIcon from '../../components/frames/PregnantWarningIcon';
import WarningText from '../../components/atoms/WarningText';

const SearchResult = (props) => {
    
    var searchText = '';
    if (props['query'] != '') {
        searchText = "'"+ props['query'] + "' 검색 결과입니다.";    
    } else {
        searchText = '';
    }

    return (
        <View>
            <View style={style.warningIconContainer}>
                <AgeWarningIcon/>
                <WarningText message='연령 주의'/>
                <PregnantWarningIcon/>
                <WarningText message='임산부 주의' />
                <ElderlyWarningIcon/>
                <WarningText message='노약자 주의' />
            </View>
            <Text style={style.searchResultText}>{searchText}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    warningIconContainer: {
        width: '100%',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'flex-start',
        margin: 10,
    },
    searchResultText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        margin: 10,
        marginBottom: 0,
    }
})
export default SearchResult;