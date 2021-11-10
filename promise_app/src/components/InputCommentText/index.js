import React, {useState} from 'react';
import { View, Text,  TextInput, TouchableOpacity } from 'react-native';

const InputCommentText = (props) => {
    const [text, onChangeText] = useState('');
    const handleText = (text)=>{
        onChangeText(text);
        props.result(text);
    }
    return(
        <View style={{alignItems: 'center', width:'95%', justifyContent: 'center' , height:50, margin: 10, borderRadius: 5}}>
            <View style={{width:'100%', backgroundColor:'#E9E9E9',  height: 50, alignItems: 'center', justifyContent:'center', flexDirection: 'row'}}>
                <TextInput onChangeText={handleText} maxLength={40} placeholder={props.name} value={text} style={{padding: 10, height: 50, width:'85%',color:'black', backgroundColor: '#E9E9E9'}}/>
                <TouchableOpacity style={{padding: 10, height: 50, width:'15%',color:'black', backgroundColor: '#E9E9E9', alignItems: 'center', justifyContent:'center', fontWeight: '700'}}>
                    <Text>등록</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default InputCommentText;