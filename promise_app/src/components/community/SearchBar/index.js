import React, {useEffect, useState} from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { getCommunityAPI } from '../../../utils/axios';
import { getCommunitySearchAction, resetCommunitySearchValueAction } from '../../../modules/community/actions';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = (props) => {

    const dispatch = useDispatch();
    const navigation = useNavigation(); 
    const isFocused = useIsFocused(); 

    const [text, onChangeText] = useState(props.searchKeyword);

    const getCommunityResult = () => {
        if (text) {
            return getCommunityAPI.search(1, text).then(res => {
                dispatch(getCommunitySearchAction(res))
                navigation.navigate('communitysearch')
            })   
        }
    }   

    const resetSearchValue = () => {
        resetCommunitySearchValueAction()
        onChangeText('')
    }

    useEffect(()=>{
        resetSearchValue()
      },[isFocused])

    return (
        <View style={{width:'90%', height:40, marginTop: 10, alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#EEEEEE', borderRadius: 20}}>
            <View style={{ alignItems: 'center', flexDirection: "row"}}>
                <TextInput onChangeText={onChangeText} value={text} placeholder='검색어를 입력하세요' style={{width:280, backgroundColor: '#EEEEEE', color:'black', borderRadius: 20}}/>
                <Icon.Button onPress={()=>getCommunityResult()} name="search" color="black" backgroundColor='#EEEEEE' size={20} style={{paddingRight:0}}/>
            </View>
        </View>
    );
};
export default SearchBar;