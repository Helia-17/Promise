import React from 'react';
import { View, ScrollView  } from 'react-native';
import SearchList from '../../components/SearchList';
import SearchBar from '../../components/SearchBar';
import SearchResult from '../../components/SearchResult';

const Search = (props) => {
    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            {/* search bar */}
            <SearchBar/>
            {/* description */}
            <SearchResult query='타이레놀'/>
            {/* result */}
            <ScrollView  style={{ width:'100%', marginLeft:'10%', marginBottom:'5%', marginTop:'3%' }} >
                <SearchList name="타이레놀" company="(주)한국얀센" navigation={props.navigation}/>
                <SearchList name="타이레놀" company="(주)한국얀센" navigation={props.navigation}/>
                <SearchList name="타이레놀" company="(주)한국얀센" navigation={props.navigation}/>
                <SearchList name="타이레놀" company="(주)한국얀센" navigation={props.navigation}/>
                <SearchList name="우먼스타이레놀" company="(주)한국얀센" navigation={props.navigation}/>
                <SearchList name="어린이타이레놀" company="(주)한국얀센" navigation={props.navigation}/>
                <SearchList name="타이레놀" company="(주)한국얀센" navigation={props.navigation}/>
                <SearchList name="타이레놀" company="(주)한국얀센" navigation={props.navigation}/>
            </ScrollView>
        </View>
    );
};
export default Search;