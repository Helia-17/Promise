import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RoundBtn from '../../components/atoms/RoundBtn'; 
import SearchResultBar from '../../components/community/SearchResultBar';
import SearchResultList from '../../components/community/SearchResultList';

const CommunitySearchPage = ({navigation}) => {

    const searchKeyword = useSelector((state)=>state.community.searchKeyword);
    
    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            <SearchResultBar searchKeyword={searchKeyword}/>
            <View style={{width:'100%', margin:10, marginBottom:55 }}>
                <SearchResultList searchKeyword={searchKeyword}/>
            </View>
            <View style={{width:'100%', alignItems:'flex-end', position: 'absolute', left: 0, right: 0, bottom: 0}}>
                <RoundBtn 
                    func={()=>navigation.navigate('communitywrite')}
                    text={<Icon name="plus" 
                    style={{
                    color: "white",
                    fontSize: 30,
                    }} />}>
                </RoundBtn>
            </View>
        </View>
    );
};

export default CommunitySearchPage;