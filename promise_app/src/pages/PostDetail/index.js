import React, {useState, useEffect} from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RoundBtn from '../../components/atoms/RoundBtn'; 
import SearchBar from '../../components/community/SearchBar';
import PostList from '../../components/community/PostList';
import CommentList from '../../components/community/CommentList';
import InputCommentText from '../../components/InputCommentText';

const PostDetailPage = ({navigation}) => {
    const [comment, onChangeComment] = useState('');
    const item =         {
          username: 'manon',
          title: '타이레놀 1개 vs 2개',
          date: '2021.10.18 04:34',
          content: '타이레놀 먹을 때 다들 한번에 몇 개씩 먹나요?? 당연히 2개 아닌가요',
          comments: [
              {
                username: 'manon',
                title: '타이레놀 1개 vs 2개',
                date: '2021.10.18 04:34'
              },
              {
                username: 'manon',
                title: '타이레놀 1개 vs 2개',
                date: '2021.10.18 04:34'
              },
          ]
        }

    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'white' }}>
            <View style={{width:'100%', margin:10}}>
                <View style={styles.container}>
                <View>
                    <Text style={styles.itemTitleText}>{item.title}</Text>
                    <Text style={styles.itemNameText}>{item.username}</Text>
                    <Text style={styles.itemDateText}>
                    {item.date}
                    </Text>
                    <Text style={styles.itemContentText}>{item.content}</Text>
                </View>
                </View>
            </View>
            <View style={{ flex:3, width:'100%', backgroundColor:'#F4F4F4'}}>
                <CommentList/>
            </View>
            <View style={{width:'100%', alignItems:'center', position: 'absolute', left: 0, right: 0, bottom: 0}}>
              <InputCommentText name='댓글' result={(data)=>onChangeComment(data)} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      paddingVertical: 12,
      paddingHorizontal: 14,
      shadowColor: '#f1f2f3',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 1,
      shadowRadius: 18.95,
      elevation: 1,
      zIndex: 1,
      backgroundColor: 'white',
      color: '#333333'
    },
    itemNameText: {
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 5,
    },
    itemTitleText: {
      fontSize: 20,
      lineHeight: 24,
      fontWeight: '700',
      paddingVertical: 5,
    },
    itemContentText: {
      fontSize: 14,
      fontWeight: '400',
      paddingTop: 30,
    },
    itemDateText: {
      textAlign: 'left',
      fontSize: 10,
      fontWeight: '500',
    },
  });

export default PostDetailPage;