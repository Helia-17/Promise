import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import OCR from '../../components/OCR';

const AddPill = (props) => {

    const handlePlusModal = (data) => {
        props.add(data);
    }

    const handleOCRModal = (data) => {
        console.log(data);
        props.ocrdata(data);
        props.ocradd(true);
    }

    return(
        <View style={{flexDirection: "row", alignItems: 'center', width:'90%', justifyContent: 'center', height:50}}>
            <Text style={{ fontSize:15, color:'black', fontWeight:'bold', width:'20%'  }}>약 정보</Text>
            <View style={{flexDirection: "row",width:'78%', backgroundColor:'#E9E9E9', height:40, borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
                <Icon.Button name='plus' size={20} color='black' backgroundColor='#E9E9E9' onPress={()=>handlePlusModal(true)}/>
                <OCR data = {(data)=>handleOCRModal(data)}/>
            </View>
        </View>
    );
};
export default AddPill;