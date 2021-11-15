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
                <Text style={{color:'white'}}>등록</Text>
            </TouchableOpacity>
        </View >
    );
};

const styles = StyleSheet.create({
    commentContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: "auto",
        backgroundColor: '#F9F9F9',
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
    },
    commentInput: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        padding: 15,
        height: 50,
        width: '85%',
        color: 'black',
        backgroundColor: '#E9E9E9',
    },
    commentInsert: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        padding: 10,
        height: 50,
        width: '15%',
        backgroundColor: '#A8BDD5',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700'
    }
})
export default InputCommentText;