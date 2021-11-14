import React, {useState, useEffect} from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RoundBtn from '../../components/atoms/RoundBtn'; 
import SearchBar from '../../components/community/SearchBar';
import PostList from '../../components/community/PostList';

const CommunityPage = ({navigation}) => {
    
    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            {/* search bar */}
            <SearchBar/>
            <View style={{width:'100%', margin:10}}>
                <PostList/>
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

export default CommunityPage;