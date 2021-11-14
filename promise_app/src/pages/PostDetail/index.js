import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  NativeModules,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RoundBtn from '../../components/atoms/RoundBtn';
import SmallBtn from '../../components/atoms/SmallBtn';
import SearchBar from '../../components/community/SearchBar';
import PostList from '../../components/community/PostList';
import CommentList from '../../components/community/CommentList';
import InputCommentText from '../../components/InputCommentText';
import { SafeAreaView } from 'react-native-safe-area-context';

// const { StatusBarManager } = NativeModules

const PostDetailPage = ({navigation}) => {
  const [comment, onChangeComment] = useState('');
  const item = {
    username: 'manon',
    title: '타이레놀 1개 vs 2개',
    date: '2021.10.18 04:34',
    content:
      '타이레놀 먹을 때 다들 한번에 몇 개씩 먹나요?? 당연히 2개 아닌가요?',
    comments: [
      {
        username: 'manon',
        title: '타이레놀 1개 vs 2개',
        date: '2021.10.18 04:34',
      },
      {
        username: 'manon',
        title: '타이레놀 1개 vs 2개',
        date: '2021.10.18 04:34',
      },
    ],
  };

  // useEffect(()=>{
  //   Platform.OS == 'ios' ? StatusBarManager.getHeight((statusBarFrameData) => {
  //       setStatusBarHeight(statusBarFrameData.height)
  //     }) : null
  // }, []);

  // const [statusBarHeight, setStatusBarHeight] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {Platform.OS === 'android' ? (
        <View>
          <View style={{width: '100%', margin: 10}}>
            <View style={styles.container}>
              <View>
                <Text style={styles.itemTitleText}>{item.title}</Text>
                <Text style={styles.itemNameText}>{item.username}</Text>
                <Text style={styles.itemDateText}>{item.date}</Text>
                <Text style={styles.itemContentText}>{item.content}</Text>
              </View>
            </View>
          </View>
          <View style={{marginVertical:15, marginHorizontal: 10, flexDirection: 'row', justifyContent:'flex-end', alignItems: 'center'}}>
            <SmallBtn backgroundColor='#F1E7C4' value='수정' func={()=>navigation.navigate('communityupdate', {item: item})}/>
            <SmallBtn backgroundColor='#FF6464' value='삭제' />
          </View>
          {/* <InputScrollView style={{ width:'100%', backgroundColor:'#F4F4F4'}}>
                </InputScrollView> */}
          <CommentList />
          <KeyboardAvoidingView>
            <InputCommentText name="댓글" result={data => onChangeComment(data)} />
          </KeyboardAvoidingView>
        </View>
      ) : (
        <View>
          <View style={{width: '100%', padding: 5}}>
            <View style={styles.container}>
              <View>
                <Text style={styles.itemTitleText}>{item.title}</Text>
                <Text style={styles.itemNameText}>{item.username}</Text>
                <Text style={styles.itemDateText}>{item.date}</Text>
                <Text style={styles.itemContentText}>{item.content}</Text>
              </View>
            </View>
            
          </View>
            <InputCommentText name="댓글" result={data => onChangeComment(data)} />  
            <CommentList />
        </View>
      )}
      
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
    color: '#333333',
  },
  itemNameText: {
    fontSize: 18,
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
    fontSize: 16,
    fontWeight: '400',
    paddingTop: 30,
  },
  itemDateText: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default PostDetailPage;
