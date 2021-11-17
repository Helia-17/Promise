import React, {useState} from 'react';
import { View, Text,  TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet, ScrollView, Keyboard  } from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';
import { getCommunityAPI } from '../../utils/axios';
import { changePostDetailAction } from '../../modules/community/actions';

const InputCommentText = (props) => {
    const [text, onChangeText] = useState('');

    const handleText = (text)=>{
        onChangeText(text);
        props.result(text);
    }

    const createComment = () => {
        getCommunityAPI.commentCreate(props.postId, text).then(res => {
            onChangeText('')
            changePostDetailAction()
            Keyboard.dismiss()
          }).then(()=>{props.refreshComments()})
    }

    return(
        <View style={styles.commentContainer}>
            <TextInput onChangeText={handleText} maxLength={40} placeholder={props.name} value={text} style={styles.commentInput}/>
            <TouchableOpacity style={styles.commentInsert} onPress={createComment}>
                <Text>등록</Text>
            </TouchableOpacity>
        </View >
    );
};

const styles = StyleSheet.create({
    commentContainer: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#F9F9F9',
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderColor:'#BDBDBD', 
        borderTopWidth:0.5,
        
    },
    commentInput: {
        borderTopLeftRadius: 17,
        borderBottomLeftRadius: 17,
        padding: 15,
        height: 50,
        width: '85%',
        color: 'black',
        backgroundColor: '#E9E9E9',
    },
    commentInsert: {
        borderTopRightRadius: 17,
        borderBottomRightRadius: 17,
        padding: 10,
        height: 50,
        width: '15%',
        backgroundColor: '#E9E9E9',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700'
    }
})
export default InputCommentText;