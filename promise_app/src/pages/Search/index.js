import React, { useState }from 'react';
import { View, ScrollView, Text, SafeAreaView  } from 'react-native';
import SearchList from '../../components/SearchList';
import SearchBar from '../../components/SearchBar';
import SearchResult from '../../components/SearchResult';
import AgeWarningIcon from '../../components/frames/AgeWarningIcon';
import PregnantWarningIcon from '../../components/frames/PregnantWarningIcon';
import ElderlyWarningIcon from '../../components/frames/ElderlyWarningIcon';
import WarningText from '../../components/atoms/WarningText';

const Search = (props) => {
    const [mediList, setMediList] = useState([]);
    const [isMediList, setIsMediList] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [isSearchText, setIsSearchText] = useState(true);
    
    const medicineList = () => {
        let result = [];
        if (mediList) {
            // setIsMediList(true);
            // console.log("isMediList : ",isMediList);
            mediList.map(item => {
                console.log(item.mediName);
                result = result.concat(
                    <SearchList name={item.mediName} company={item.mediCompany} navigation={props.navigation}/>
                )
            })
        } else {
            setIsMediList(false);
        }
        return result;
    }

    const searchTextConfirm = () => {
        let result = [];
        if (isSearchText) {
            result = result.concat(
                <SearchResult query={ searchText + " 검색 결과입니다."}/>
            )
        } else {
            setIsSearchText(false);
        }
        return result;
    }

    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            {/* search bar */}
            <SearchBar data={(data) => setMediList(data)} searchText={(searchText) => setSearchText(searchText)}/>
            {/* description */}
            {isSearchText ? (
                <View style={{ width: '100%', alignItems: 'flex-start', marginLeft: '10%' }}>
                    {searchTextConfirm()}
                </View>
            ) : (
                <View style={{ width:'100%', alignItems: 'flex-start', marginLeft:'10%'}}>
                    <View style={{ width:'100%', alignItems: 'center', flexDirection: "row", justifyContent: 'flex-start', marginTop:'1%'}}>
                        <AgeWarningIcon/>
                        <WarningText message='연령 주의'/>
                        <PregnantWarningIcon/>
                        <WarningText message='임산부 주의' />
                        <ElderlyWarningIcon/>
                        <WarningText message='노약자 주의' />
                    </View>
                </View>
            )}
            
            {/* result */}
            {mediList.length > 0 ? (
                <ScrollView  style={{ width:'100%', marginLeft:'10%', marginBottom:'5%', marginTop:'3%' }} >
                    { medicineList()}
                </ScrollView>
            ) : (
                <View style={{ width: '100%', height:'85%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{fontSize:20, color:'#BBBBBB'}}>검색 결과가 없습니다.</Text>
                </View>  
            )}
            
        </View>
    );
};
export default Search;