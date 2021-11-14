import React, {useState} from 'react';
import { View, Text,  TextInput } from 'react-native';

const InputTitleText = (props) => {
    const [text, onChangeText] = useState(props.text);
    const handleText = (text)=>{
        onChangeText(text);
        props.result(text);
    }
    return(
        <View style={{alignItems: 'center', width:'100%', justifyContent: 'center' , height:50}}>
            <View style={{width:'100%', backgroundColor:'#E9E9E9',  height: 20, borderRadius: 5, alignItems: 'center', justifyContent:'center'}}>
                <TextInput onChangeText={handleText} maxLength={40} placeholder={props.name} value={text} style={{padding: 10, height: 50, width:'100%',color:'black', backgroundColor: '#E9E9E9', borderRadius: 5}}/>
            </View>
        </View>
    );
};
export default InputTitleText;