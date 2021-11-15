import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const PetModal = (props) => {
    const [petColor, setPetColor] = useState('#000000');
    const [petName, setPetName] = useState('');


    const handlePet = (data)=>{
        setPetName(data);
        setPetColor('#A6DB9E');
        if(petName.length===0){
            setPetColor('#FFABAB');
        }
    }

    const sendData = () =>{
        if(petColor==='#A6DB9E'&&petName.length>0){
            props.petname(petName);
            props.now(false);
            props.next(petName);
        }else{
            alert('펫 이름을 지어주세요.');
        }
    }

    return (
        <View style={{justifyContent: 'center', alignItems: 'center', flex:1, backgroundColor:'rgba(0,0,0,0.5)'}}>
            <View style={{position: 'absolute', width: '80%', height: '30%', backgroundColor: 'white', borderRadius: 20, elevation:2}} >
            <ScrollView style={{ width:'100%'}} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                <View style={{flexDirection: "row", margin:10, alignItems: 'center', justifyContent:'flex-end', width:'90%'}}>
                    <Icon.Button name='close' size={17} color='black' backgroundColor='white' onPress={()=>props.exit(false)}/>
                </View>
                <View style={{width:'100%', alignItems: 'center'}}>
                <Text style={{fontSize:15, color: 'black', fontWeight: 'bold', margin:5}}>사용하실 펫 이름을 지어주세요.</Text>
                </View>
                <View style={{flexDirection: "row",alignItems: 'center', justifyContent: 'center', width:'95%', marginTop:5}}>
                <View style={{width:'80%', height:40, margin: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EEEEEE', borderRadius: 20}}>
                    <View style={{ alignItems: 'center', flexDirection: "row", margin:1}}>
                    <TextInput onChangeText={handlePet} value={petName} style={{width:'70%', textAlign:'center', backgroundColor: '#EEEEEE', borderRadius: 20, marginRight:5}}/>
                    <Icon name='checkcircle' color={petColor} size={17}/>
                    </View>
                </View>
                </View>
                <View style={{marginTop:15, alignItems: 'center', width:'100%'}}>
                    <TouchableOpacity style={{backgroundColor:'#A3BED7', color:'black', width:'50%', alignItems: 'center', borderRadius: 5, height:40, justifyContent: 'center'}} onPress={()=>sendData()}>
                        <Text style={{color:'black', fontSize:15, fontWeight:'bold'}} >완료</Text >
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </View>
        </View>
    );
}

export default PetModal;