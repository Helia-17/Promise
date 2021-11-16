import React, { useState }from 'react';
import { View, ScrollView, Text } from 'react-native';
import SearchList from '../../components/SearchList';
import SearchBar from '../../components/SearchBar';
import SearchResult from '../../components/SearchResult';

const Search = (props) => {
    const [mediList, setMediList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isSearchText, setIsSearchText] = useState(true);
    
    const medicineList = () => {
        let result = [];
        if (mediList) {
            
            mediList.map(item => {
                result = result.concat(
                    <SearchList
                        serialNum={item.mediSerialNum}
                        name={item.mediName}
                        company={item.mediCompany}
                        elderCare={item.mediElderlyCare}
                        pregnancyCare={item.mediPregnancyCare}
                        ageCare={item.mediAgeCare}
                        navigation={props.navigation}
                    />
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
                <SearchResult query={searchText}/>
            )
        } else {
            setIsSearchText(false);
            result = result.concat(
                <SearchResult query={""}/>
            )
        }
        return result;
    }

    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            <SearchBar data={(data) => setMediList(data)} searchText={(searchText) => setSearchText(searchText)}/>
            <View style={{ width: '100%', alignItems: 'flex-start', marginLeft: '10%' }}>
                    {searchTextConfirm()}
            </View>
            {mediList.length > 0 ? (
                <ScrollView  style={{ width:'100%', marginLeft:'10%', marginBottom:'5%', marginTop:'3%' }} >
                    { medicineList()}
                </ScrollView>
            ) : (
                <View style={{ width: '100%', height:'85%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{fontSize:24, color:'#BBBBBB'}}>검색 결과가 없습니다.</Text>
                </View>  
            )}
            
        </View>
    );
};
export default Search;