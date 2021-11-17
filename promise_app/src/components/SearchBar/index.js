import React, {useState} from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spinner from 'react-native-loading-spinner-overlay';
import { getMediListAPI } from '../../utils/axios';

const SearchBar = (props) => {
    const [text, onChangeText] = useState('');
    const [spinVisible, setSpinvisible] = useState();

    const getMediList = async () => {
        if (text === '') {
            alert('검색어를 입력해주세요.');
        } else {
            setSpinvisible(true);
            const res = await getMediListAPI(text);
            props.data(res);
            props.searchText(text);
            setSpinvisible(false);
        }
    }

    return (
        <View style={{width:'90%', height:50, marginTop: 20, margin: 10, alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#EEEEEE', borderRadius: 20}}>
            <Spinner visible={spinVisible} />
            <View style={{ alignItems: 'center', flexDirection: "row"}}>
                <TextInput onChangeText={onChangeText} value={text} style={{width:'80%', color:'black', fontSize: 18, marginRight: 10}}/>
                <Icon.Button onPress={(data)=>getMediList(data), (searchText)=>getMediList(searchText)} name="search" color="black" backgroundColor='#EEEEEE' size={20} style={{paddingRight:0}}/>
            </View>
        </View>
    );
};
export default SearchBar;