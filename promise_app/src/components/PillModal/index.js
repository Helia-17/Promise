import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import {searchMedicine} from '../../utils/axios';

const PillModal = (props) => {
    const [pillData, setPillData] = useState([]);
    const [search, onChangeSearch] = useState('');
    const [selectedData, setSelectedData] = useState([]);

    const addData = (data)=>{
        setSelectedData(data);
    }

    const mySearchList = ()=>{
        let result = [];
        if(pillData){
            pillData.map(item=>{
                if(selectedData.mediSerialNum===item.mediSerialNum){
                    result = result.concat(
                        <TouchableOpacity style={{flexDirection: "row", alignItems: 'center', width:'85%', margin:10, marginTop:0, justifyContent: 'space-around', borderRadius: 5, borderColor:'black', borderWidth:0.5}}
                        onPress={()=>addData({mediSerialNum:item.mediSerialNum, mediName:item.mediName})}>
                            <Text style={{color:'black', width:'90%', textAlign:'center', marginTop:10, marginBottom:10}}>{item.mediName}</Text>
                        </TouchableOpacity>
                    )
                }else{
                    result = result.concat(
                        <TouchableOpacity style={{flexDirection: "row", alignItems: 'center', width:'85%', margin:10, marginTop:0, justifyContent: 'space-around', borderRadius: 5, borderColor:'rgba(0,0,0,0.3)', borderWidth:0.5}}
                        onPress={()=>addData({mediSerialNum:item.mediSerialNum, mediName:item.mediName})}
                        >
                            <Text style={{color:'black', width:'90%', textAlign:'center', marginTop:10, marginBottom:10}}>{item.mediName}</Text>
                        </TouchableOpacity>
                    );
                }
            })
        }
        return result;
    }

    const searchList = async()=>{
        const result = await searchMedicine(search);
        setPillData(result);
    }

    const sendProps = ()=>{
        props.selected(selectedData);
        props.visible(false);
    }

    return(
        <View style={{justifyContent: 'center', alignItems: 'center', flex:1, backgroundColor:'rgba(0,0,0,0.5)'}}>
            <View style={{position: 'absolute', width: '80%', height: '50%', backgroundColor: 'white', borderRadius: 20, elevation:2}} >
                <View style={{flexDirection: "row", margin:10, alignItems: 'center', justifyContent:'flex-end', marginRight:10}}>
                    <Icon.Button name='close' size={17} color='black' backgroundColor='white' onPress={()=>props.visible(false)}/>
                </View>
                <View style={{margin:20, width:'100%', marginTop:5}}>
                    <View style={{width:'85%', height:40, margin: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EEEEEE', borderRadius: 20}}>
                        <View style={{ alignItems: 'center', flexDirection: "row", margin:1}}>
                            <TextInput placeholder='약을 입력해주세요' onChangeText={onChangeSearch} value={search} style={{width:'78%', color:'black',backgroundColor: '#EEEEEE', borderRadius: 20, marginLeft:10}}/>
                            <Icon.Button onPress={()=>searchList()} name="search1" color="black" backgroundColor='#EEEEEE' size={20} style={{paddingRight:0}}/>
                        </View>
                    </View>
                </View>
                <ScrollView style={{ width:'100%'}} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                    {mySearchList()}
                </ScrollView>
                <View style={{margin:20, alignItems: 'center'}}>
                    <TouchableOpacity style={{backgroundColor:'#B8CE9C', color:'black', width:'30%', alignItems: 'center', borderRadius: 5, height:30, justifyContent: 'center'}} onPress={()=>sendProps()} >
                        <Text style={{color:'black', fontSize:15, fontWeight:'bold'}}>등록</Text >
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default PillModal;