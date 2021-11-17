import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import { getCommunityAPI } from '../../utils/axios';
import { useSelector, useDispatch } from 'react-redux';
import { getCommunityAction, resetCommunityListAction, getPostDetailAction } from '../../modules/community/actions';

import SmallBtn from '../../components/atoms/SmallBtn';
import CommentList from '../../components/community/CommentList';
import InputCommentText from '../../components/InputCommentText';
import Moment from 'moment';

const PostDetailPage = ({navigation, route}) => {

  const dispatch = useDispatch();

  const  stateUserNickname  = useSelector((state) => state.user.userInfo.userNickname)
  const [ userNickname, setUserNickname ] = useState(stateUserNickname)

  const postId = route.params.post.commuId
  const postDate = Moment(route.params.postDate).format("YYYY.MM.DD HH:mm")
  const post = useSelector((state) => state.community.communityPostDetail)

  const commentList = useSelector((state) => state.community.communityPostDetail.commuCommentDetailList)
  const [comment, onChangeComment] = useState('');
  

  const refreshComments = async () => {
        getCommunityAPI.detail(postId).then(res => {
          dispatch(getPostDetailAction(res))
        })
  }

  useEffect(()=> {
    setUserNickname(stateUserNickname)
  }, [])


  const getCommunityDetail = () => {
    getCommunityAPI.detail(postId).then(res => {
      getPostDetailAction(res)
    })
  }

  const postDelete = () => {
    getCommunityAPI.delete(postId).then(res => {
      dispatch(resetCommunityListAction())
    }).then(()=>{
      getCommunityAPI.list(1).then(res => {
        dispatch(getCommunityAction(res))
      }).then(()=>{navigation.pop()})
    })
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {Platform.OS === 'android' ? (
        <View style={{ height: '100%'}}>
          <ScrollView style={{ width: '100%', marginVertical: 10, marginBottom: 55}} contentContainerStyle={{flexDirection:'column', justifyContent:'center'}}>
            <View style={styles.container}>
              <View style={styles.subContainer}>
                <Text style={styles.itemTitleText}>{post.commuTitle}</Text>
                {userNickname === post.userNickname?
                <View style={styles.buttonContainer}>
                  <SmallBtn value='수정' func={()=>navigation.navigate('communityupdate', {postId:postId, post: post})}/>
                  <Text style={{color:'black', fontSize:15, fontWeight:'bold'}}>|</Text>
                  <SmallBtn value='삭제' func={()=>postDelete()}/>
                </View>
                : null
                }
              </View>
              <View>
                <Text style={styles.itemNameText}>{post.userNickname}</Text>
                <Text style={styles.itemDateText}>{postDate}</Text>
                <Text style={styles.itemContentText}>{post.commuContents}</Text>
              </View>
            </View>
            {commentList.length != 0
              ? <View style={{backgroundColor:"#F4F4F4", minHeight:333}}>
                  <CommentList postId={postId} commentList={commentList} />
                </View>
              :
               <View style={styles.noComments} >
                <Text style={{color:'#8e8e8f'}}>가장 먼저 댓글을 작성해보세요</Text>
              </View>
            }
          </ScrollView>
          <KeyboardAvoidingView style={{ position: 'absolute', bottom: 0 }}>
            <InputCommentText name="댓글 입력" result={data => onChangeComment(data)} postId={postId} refreshComments={refreshComments}/>
          </KeyboardAvoidingView>
        </View>
      ) : (
        <View>
          <ScrollView style={{width: '100%', padding: 5}}>
            <View style={styles.container}>
              <View >
                <Text style={styles.itemTitleText}>{post.commuTitle}</Text>
                {userNickname === post.userNickname?
                <View style={styles.buttonContainer}>
                  <SmallBtn value='수정' func={()=>navigation.navigate('communityupdate', {postId:postId, post: post})}/>
                  <Text style={{color:'black', fontSize:15, fontWeight:'bold'}}>|</Text>
                  <SmallBtn value='삭제' func={()=>postDelete()}/>
                </View>
                : null
                }
              </View>
              <View>
                <Text style={styles.itemNameText}>{post.userNickname}</Text>
                <Text style={styles.itemDateText}>{postDate}</Text>
                <Text style={styles.itemContentText}>{post.commuContents}</Text>
              </View>
            </View>
            <InputCommentText name="댓글" result={data => onChangeComment(data)} postId={postId} refreshComments={refreshComments} />  
            {commentList.length != 0
                ? (
                  <View style={{backgroundColor:"#F4F4F4", minHeight:330}}>
                   <CommentList postId={postId} commentList={commentList} />
                  </View>
                )
                : (
                  <View style={styles.noComments} >
                    <Text style={{color:'#8e8e8f'}}>가장 먼저 댓글을 작성해보세요</Text>
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
    minHeight: 200,
    paddingVertical: 10,
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
  subContainer : {
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'space-between'
  },
  buttonContainer: {
    marginVertical:5, 
    flexDirection: 'row', 
    justifyContent:'flex-end', 
    alignItems: 'center'
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
    minHeight:333,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
    backgroundColor: '#F4F4F4',
  },
});

export default PostDetailPage;
