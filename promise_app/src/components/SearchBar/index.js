import React, {useState} from 'react';
import { View, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getMediListAPI } from '../../utils/axios';

const SearchBar = (props) => {
    const [text, onChangeText] = useState('');

    const getMediList = async () => {
        if (text === '') {
            Alert.alert(
                '검색어를 입력해주세요.',
                [{
                    text:'확인',
                    onPress : ()=> withdrawAccount()
                }],
                {cancleable:false}
            )
        } else {
            const res = await getMediListAPI(text);
            props.data(res);
            props.searchText(text);
        }
    }

    return (
        <View style={{width:'90%', height:50, marginTop: 20, margin: 10, alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#EEEEEE', borderRadius: 20}}>
            <View style={{ alignItems: 'center', flexDirection: "row"}}>
                <TextInput onChangeText={onChangeText} value={text} style={{width:'78%', color:'black', borderRadius: 20, fontSize: 18}}/>
                <Icon.Button onPress={(data)=>getMediList(data), (searchText)=>getMediList(searchText)} name="search" color="black" backgroundColor='#EEEEEE' size={20} style={{paddingRight:0, marginLeft: 10}}/>
            </View>
        </View>
    );
};
export default SearchBar;