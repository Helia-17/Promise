import React, {useState} from 'react';
import { View, Text,  TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';

const InputCommentText = (props) => {
    const [text, onChangeText] = useState('');
    const handleText = (text)=>{
        onChangeText(text);
        props.result(text);
    }
    return(
        // <InputScrollView>
        <View style={{width:'100%', backgroundColor:'#E9E9E9', bottom: 0, height: 50, alignItems: 'center', justifyContent:'center', flexDirection: 'row'}}>
            <TextInput onChangeText={handleText} maxLength={40} placeholder={props.name} value={text} style={{padding: 10, height: 50, width:'85%',color:'black', backgroundColor: '#E9E9E9'}}/>
            <TouchableOpacity style={{padding: 10, height: 50, width:'15%',color:'black', backgroundColor: '#A3BED7', alignItems: 'center', justifyContent:'center', fontWeight: '700'}}>
                <Text>등록</Text>
            </TouchableOpacity>
        </View >
        // </InputScrollView>
    );
};
export default InputCommentText;