import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import {searchMedicine} from '../../utils/axios';

const PillModal = (props) => {
    const [pillData, setPillData] = useState([]);
    const [search, onChangeSearch] = useState('');
    const [selectedData, setSelectedData] = useState([]);
    const [resultEmpty, setEmpty] = useState(false);

    const addData = (data)=>{
        setSelectedData(data);
    }

    const mySearchList = ()=>{
        let result = [];
        if(pillData.length>0){
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
        if(result.length===0) setEmpty(true);
        else setEmpty(false);
    }

    const sendProps = ()=>{
        props.selected(selectedData);
        if(selectedData.length===0){
            alert('선택하신 약이 없습니다!');
        }
        props.visible(false);
        props.my(false);
    }

    const myAdd = () => {
        props.selected([]);
        props.visible(false);
        props.my(true);
    }

    useEffect(()=>{
        setPillData([]);
        onChangeSearch('');
    }, []);

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
                {resultEmpty?(
                    <ScrollView style={{ width:'100%'}} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize:17, color:'gray'}}>해당되는 약이 존재하지 않습니다.</Text>
                        <Text style={{fontSize:13, color:'#414141', marginTop:10}}>직접 등록을 원하시나요?</Text>
                        <TouchableOpacity style={{borderColor:'#BDBDBD', borderWidth:0.5,backgroundColor:'white', color:'black', width:'30%', marginTop:20, marginBottom:20, alignItems: 'center', borderRadius: 5, height:30, justifyContent: 'center'}} onPress={()=>myAdd()} >
                            <Text style={{color:'black', fontSize:15, fontWeight:'bold'}}>직접 등록</Text >
                        </TouchableOpacity>
                    </ScrollView>
                ):(
                    <ScrollView style={{ width:'100%'}} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                        {mySearchList()}
                    </ScrollView>
                )}
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