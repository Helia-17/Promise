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

import { getCommunityAPI } from '../../utils/axios';
import { useSelector, useDispatch } from 'react-redux';
import { getCommunityAction, changePostDetailAction ,resetPostDetailAction, resetCommunityListAction } from '../../modules/community/actions';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RoundBtn from '../../components/atoms/RoundBtn';
import SmallBtn from '../../components/atoms/SmallBtn';
import SearchBar from '../../components/community/SearchBar';
import PostList from '../../components/community/PostList';
import CommentList from '../../components/community/CommentList';
import InputCommentText from '../../components/InputCommentText';
import { SafeAreaView } from 'react-native-safe-area-context';

// const { StatusBarManager } = NativeModules

const PostDetailPage = ({navigation, route}) => {

  const dispatch = useDispatch();

  const  stateUserNickname  = useSelector((state) => state.user.userInfo.userNickname)
  const [ userNickname, setUserNickname ] = useState(stateUserNickname)

  const { communityPostDetail }  = useSelector((state) => state.community)

  const postId = route.params.post.commuId
  const postDate = route.params.postDate
  const [post, setPost] = useState(route.params.post)

  const [commentList, setCommentList] = useState('')
  const [comment, onChangeComment] = useState('');
  // const [commentDeleted, setCommentDeleted] = useState('');

  useEffect(()=> {
    setUserNickname(stateUserNickname)
    getCommunityDetail()
  }, [])


  const getCommunityDetail = () => {
    getCommunityAPI.detail(postId).then(res => {
      setPost(res)
      dispatch(resetPostDetailAction(res))
      setCommentList(res.commuCommentDetailList)
    })
  }

  useEffect(()=>{
    getCommunityDetail()
  }, [])

  const postDelete = () => {
    getCommunityAPI.delete(postId).then(res => {
      alert('게시물이 성공적으로 삭제되었습니다.')
      dispatch(resetCommunityListAction())
    }).then(()=>{
      getCommunityAPI.list(1).then(res => {
      // setList(res)
        dispatch(getCommunityAction(res))
      }).then(()=>{navigation.pop()})
    })
  }

  // const refreshCommentList = ({created}) => {
  //   if (created === true) {
  //     setCommentDeleted(true)
  //   }
  // }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {Platform.OS === 'android' ? (
        <View style={{ height: '100%'}}>
          <ScrollView style={{ width: '100%', marginVertical: 10, marginBottom: 55}} contentContainerStyle={{flexDirection:'column', justifyContent:'center'}}>
            <View style={styles.container}>
              <View>
                <Text style={styles.itemTitleText}>{post.commuTitle}</Text>
                <Text style={styles.itemNameText}>{post.userNickname}</Text>
                <Text style={styles.itemDateText}>{postDate}</Text>
                <Text style={styles.itemContentText}>{post.commuContents}</Text>
              </View>
            </View>
            <View style={{marginVertical:15, marginHorizontal: 10, flexDirection: 'row', justifyContent:'flex-end', alignItems: 'center'}}>
              {userNickname === post.userNickname?
              <>
                <SmallBtn backgroundColor='#F1E7C4' value='수정' func={()=>navigation.navigate('communityupdate', {postId:postId, post: post})}/>
                <SmallBtn backgroundColor='#FF6464' value='삭제' func={postDelete}/>
              </>
              : null
              }
            </View>
            {commentList.length != 0
                ? <View style={{backgroundColor:"#F4F4F4", minHeight:230}}><CommentList commentList={commentList} postId={postId}/></View>
                : null
            }
          </ScrollView>
          {commentList.length != 0
                ? null
                : (
                  <View style={styles.noComments} >
                    <Text>가장 먼저 댓글을 작성해보세요</Text>
                  </View>
                ) 
          }
          <KeyboardAvoidingView style={{ position: 'absolute', bottom: 0 }}>
            <InputCommentText name="댓글" result={data => onChangeComment(data)} postId={postId}/>
          </KeyboardAvoidingView>
        </View>
      ) : (
        <View>
          <ScrollView style={{width: '100%', padding: 5}}>
            <View style={styles.container}>
              <View>
                <Text style={styles.itemTitleText}>{post.commuTitle}</Text>
                <Text style={styles.itemNameText}>{post.userNickname}</Text>
                <Text style={styles.itemDateText}>{postDate}</Text>
                <Text style={styles.itemContentText}>{post.commuContents}</Text>
              </View>
            </View>
            <View style={{marginVertical:15, marginHorizontal: 10, flexDirection: 'row', justifyContent:'flex-end', alignItems: 'center'}}>
              {userNickname === post.userNickname?
                <>
                  <SmallBtn backgroundColor='#F1E7C4' value='수정' func={()=>navigation.navigate('communityupdate', {postId:postId, post: post})}/>
                  <SmallBtn backgroundColor='#FF6464' value='삭제' func={postDelete}/>
                </>
                : null
              }
            </View>
            <InputCommentText name="댓글" result={data => onChangeComment(data)} />  
            {commentList.length != 0
                ? <CommentList commentList={commentList}/>
                : (
                  <View style={styles.noComments} >
                    <Text>가장 먼저 댓글을 작성해보세요</Text>
                  </View>
                ) 
            }
          </ScrollView>
        </View>
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 300,
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
  noComments: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
    marginBottom: 55,
    marginHorizontal: 0,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: '#F4F4F4',
  },
});

export default PostDetailPage;
