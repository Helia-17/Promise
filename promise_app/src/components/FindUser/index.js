import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {shareUser} from '../../utils/axios';
import Spinner from 'react-native-loading-spinner-overlay';

const FindUser = (props) => {
    
    const [search, onChangeSearch] = useState('');
    const [selectUser, setSelectUser] = useState([]);
    const [findList, setFindList] = useState([]);
    const [isVisible, setIsvisible] = useState();

    const findUserList = () =>{
        let result = [];
        if(findList){
            findList.map(item=>{
                if(selectUser.userEmail===item.userEmail){
                    result = result.concat(
                        <TouchableOpacity style={{flexDirection: "row", alignItems: 'center', width:'90%', margin:10, marginTop:0, justifyContent: 'space-around', height:40, borderRadius: 5, borderColor:'black', borderWidth:0.5}} onPress={()=>setSelectUser({userEmail:item.userEmail, userNickname:item.userNickname})}>
                            <Text style={{color:'black', width:'57%', textAlign:'center'}}>{item.userEmail}</Text>
                            <Text style={{color:'black', width:'43%', textAlign:'center'}}>{item.userNickname}</Text>
                        </TouchableOpacity>
                    )
                }else{
                    result = result.concat(
                        <TouchableOpacity style={{flexDirection: "row", alignItems: 'center', width:'90%', margin:10, marginTop:0, justifyContent: 'space-around', height:40, borderRadius: 5, borderColor:'rgba(0,0,0,0.3)', borderWidth:0.5}} onPress={()=>setSelectUser({userEmail:item.userEmail, userNickname:item.userNickname})}>
                            <Text style={{color:'black', width:'57%', textAlign:'center'}}>{item.userEmail}</Text>
                            <Text style={{color:'black', width:'43%', textAlign:'center'}}>{item.userNickname}</Text>
                        </TouchableOpacity>
                    )
                }
            })
        }
        return result;
    }

    const findUser = async (search)=>{
        setIsvisible(true);
        setSelectUser('');
        const result = await shareUser(search);
        setFindList(result);
        setIsvisible(false);
    }

    useEffect(()=>{
        setSelectUser([]);
        onChangeSearch('');
    }, []);

    return(
        <View style={{justifyContent: 'center', alignItems: 'center', flex:1, backgroundColor:'rgba(0,0,0,0.5)'}}>
            <Spinner visible={isVisible} />
            <View style={{position: 'absolute', width: '80%', height: '50%', backgroundColor: 'white', borderRadius: 20, elevation:2}} >
                <View style={{flexDirection: "row", margin:20, alignItems: 'center', justifyContent:'space-between'}}>
                    <Text style={{fontSize:20, color: 'black', fontWeight: 'bold', marginLeft:10}}>사용자 찾기</Text>
                    <Icon.Button name='close' size={17} color='black' backgroundColor='white' onPress={()=>props.visible(false)}/>
                </View>
                <View style={{margin:20, width:'100%', marginTop:5}}>
                    <View style={{width:'85%', height:40, margin: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EEEEEE', borderRadius: 20}}>
                        <View style={{ alignItems: 'center', flexDirection: "row", margin:1}}>
                            <TextInput onChangeText={onChangeSearch} value={search} style={{width:'78%', color:'black',backgroundColor: '#EEEEEE', borderRadius: 20, marginLeft:10}}/>
                            <Icon.Button onPress={()=>findUser(search)} name="search1" color="black" backgroundColor='#EEEEEE' size={20} style={{paddingRight:0}}/>
                        </View>
                    </View>
                </View>
                <ScrollView style={{ width:'100%'}} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                    {findUserList()}
                </ScrollView>
                <View style={{margin:20, alignItems: 'center'}}>
                    <TouchableOpacity style={{backgroundColor:'#B8CE9C', color:'black', width:'30%', alignItems: 'center', borderRadius: 5, height:30, justifyContent: 'center'}} onPress={()=>props.selected(selectUser)}>
                        <Text style={{color:'black', fontSize:15, fontWeight:'bold'}}>등록</Text >
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
export default FindUser;