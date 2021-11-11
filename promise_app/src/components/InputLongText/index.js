import React, {useState} from 'react';
import { View, Text,  TextInput } from 'react-native';

const InputLongText = (props) => {
    const [text, onChangeText] = useState('');
    const handleText = (text)=>{
        onChangeText(text);
        props.result(text);
    }
    return(
        <View style={{width:'100%', height:350}}>
            <View style={{width:'100%', backgroundColor:'#E9E9E9',  height: 350, borderRadius: 5, alignItems: 'flex-start', justifyContent:'flex-start'}}>
                <TextInput multiline onChangeText={handleText} maxLength={2000} placeholder={props.name} value={text} style={{padding: 10, height: 50, width:'100%',color:'black', backgroundColor: '#E9E9E9', borderRadius: 5}}/>
            </View>
        </View>
    );
};
export default InputLongText;