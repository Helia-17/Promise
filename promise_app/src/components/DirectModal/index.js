import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

const DirectModal = (props) => {
    const [search, onChangeSearch] = useState('');

    const sendProps = ()=>{
        props.selected({mediName:search});
        if(search.length===0){
            alert('등록하신 약이 없습니다!');
        }
        props.visible(false);
    }

    useEffect(()=>{
        onChangeSearch('');
    }, []);

    return(
        <View style={{justifyContent: 'center', alignItems: 'center', flex:1, backgroundColor:'rgba(0,0,0,0.5)'}}>
            <View style={{position: 'absolute', width: '80%', height: 200, backgroundColor: 'white', borderRadius: 20, elevation:2}} >
                <View style={{flexDirection: "row", margin:10, alignItems: 'center', justifyContent:'flex-end', marginRight:10}}>
                    <Icon.Button name='close' size={17} color='black' backgroundColor='white' onPress={()=>props.visible(false)}/>
                </View>
                <View style={{margin:20, width:'100%', marginTop:5}}>
                    <View style={{width:'85%', height:40, margin: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EEEEEE', borderRadius: 20}}>
                        <View style={{ alignItems: 'center', flexDirection: "row", margin:1}}>
                            <TextInput placeholder='약을 입력해주세요' onChangeText={onChangeSearch} value={search} style={{width:'90%', color:'black',backgroundColor: '#EEEEEE', borderRadius: 20, marginLeft:10}}/>
                        </View>
                    </View>
                </View>
                <View style={{margin:10, alignItems: 'center'}}>
                    <TouchableOpacity style={{backgroundColor:'#B8CE9C', color:'black', width:'30%', alignItems: 'center', borderRadius: 5, height:30, justifyContent: 'center'}} onPress={()=>sendProps()} >
                        <Text style={{color:'black', fontSize:15, fontWeight:'bold'}}>등록</Text >
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default DirectModal;