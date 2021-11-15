import React, {useState, useEffect} from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

import { getCommunityAPI } from '../../utils/axios';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import InputText from '../../components/InputText';
import InputLongText from '../../components/InputLongText';
import InputTitleText from '../../components/InputTitleText';

const PostCreatePage = ({navigation}) => {
    const [title, onChangeTitle] = useState('');
    const [content, onChangeContent] = useState('');

    const sendPost = () => {
        getCommunityAPI.create(title, content).then(res => {
            // console.log(res)
            navigation.navigate('community', {created: true});
          })
    }
    
    return (
        <>
            <View  style={styles.titleView}>
                <View style={{width:'90%'}}>
                    <InputTitleText name='제목' text='' result={(data)=>onChangeTitle(data)} />
                </View>
            </View>
            <View  style={styles.mainView}>
                <ScrollView style={{ width:'90%' }} contentContainerStyle={{alignItems: 'center', justifyContent: 'flex-start'}}>
                    <View style={{width:'100%', margin:10}}>
                        <InputLongText name='내용' text='' result={(data)=>onChangeContent(data)} />
                    </View>
                </ScrollView>
                <View style={{width:'90%', margin:10, alignItmes:'flex-end'}}>
                    <TouchableOpacity style={{backgroundColor:'#A3BED7', color:'black', alignItems: 'center', borderRadius: 12, height:50, justifyContent: 'center'}} onPress={sendPost}>
                        <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>작성</Text >
                    </TouchableOpacity>
                </View>
            </View>
        </>


    );
};

const styles = StyleSheet.create({
    titleView: { 
        flex: 1, 
        alignItems: 'center', 
        backgroundColor:'#F9F9F9', 
        justifyContent:'center' 
    },
    mainView: { 
        flex: 6, 
        alignItems: 'center', 
        backgroundColor:'#F9F9F9', 
        justifyContent:'center' 
    }
})

export default PostCreatePage;