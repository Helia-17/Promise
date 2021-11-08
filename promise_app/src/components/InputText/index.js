import React, {useState} from 'react';
import { View, Text,  TextInput } from 'react-native';

const InputText = (props) => {
    const [text, onChangeText] = useState('');
    const handleText = (text)=>{
        onChangeText(text);
        props.result(text);
    }
    return(
        <View style={{flexDirection: "row", alignItems: 'center', width:'90%', justifyContent: 'center' , height:50}}>
            <Text style={{ fontSize:15, color:'black', fontWeight:'bold', width:'20%' }}>{props.name}</Text>
            <View style={{width:'78%', backgroundColor:'#E9E9E9', height:40, borderRadius: 20, alignItems: 'center', justifyContent:'center'}}>
                <TextInput onChangeText={handleText} value={text} style={{width:'80%',color:'black', backgroundColor: '#E9E9E9', borderRadius: 20, textAlign:'center'}}/>
            </View>
        </View>
    );
};
export default InputText;