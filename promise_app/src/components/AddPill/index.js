import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const AddPill = (props) => {
    const [text, setText] = useState('');

    const handleText = (text) => {
        props.add(text);
        setText('');
    }

    return(
        <View style={{flexDirection: "row", alignItems: 'center', width:'90%', justifyContent: 'center', height:50}}>
            <Text style={{ fontSize:15, color:'black', fontWeight:'bold', width:'20%'  }}>약 정보</Text>
            <View style={{flexDirection: "row",width:'78%', backgroundColor:'#E9E9E9', height:40, borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
                <TextInput onChangeText={setText} value={text} style={{width:'60%', color:'black',backgroundColor: '#E9E9E9', borderRadius: 20, textAlign: 'center'}}/>
                <Icon.Button name='plus' size={17} color='black' backgroundColor='#E9E9E9' onPress={()=>handleText(text)} style={{paddingRight:0}}/>
                <Icon.Button name='camera' size={17} color='black' backgroundColor='#E9E9E9' style={{paddingRight:0}}/>
            </View>
        </View>
    );
};
export default AddPill;