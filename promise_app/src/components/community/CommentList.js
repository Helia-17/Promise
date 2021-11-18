import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import CommentBtn from '../atoms/CommentBtn';
import { getCommunityAPI } from '../../utils/axios';
import { getPostDetailAction } from '../../modules/community/actions';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment-timezone'

const Comments = ((props) => {

  const dispatch = useDispatch();
  const { userNickname } = useSelector((state) => state.user.userInfo)
  const postId = props.postId
  const {commuCommentDetailList} = useSelector((state) => state.community.communityPostDetail)

  const postDelete = (commentId) => {
    getCommunityAPI.commentDelete(commentId).then(res => {
    }).then(()=>{
      getCommunityAPI.detail(postId).then(res => {
        dispatch(getPostDetailAction(res))
      })
    })
  }

  return (
    <ScrollView>
      {commuCommentDetailList.map(function(item, i){

        const subDate = item.commentDate;
        const postDate = moment(subDate).tz('Asia/Seoul').format("YYYY.MM.DD HH:mm")

        return (
          <TouchableHighlight key={i} underlayColor="white">
            <View style={styles.container} >
                <View style={styles.subContainer}>
                    <Text style={styles.itemNameText}>{item.userNickname}</Text>
                    <Text style={styles.itemDateText}>
                    {postDate}
                    </Text>
                </View>
                <Text style={styles.itemTitleText}>{item.commentContents}</Text>
                <View style={styles.buttonContainer}>
                    { userNickname === item.userNickname
                    ? <CommentBtn value='삭제' func={() => postDelete(item.commentId, postId)} />
                    : null
                    }
                    
                </View>
            </View>
          </TouchableHighlight>
        );
      })}
    </ScrollView>
  );
})

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 1,
    marginHorizontal: 0,
    paddingVertical: 5,
    paddingHorizontal: 14,
    minHeight: 85,
    shadowColor: '#f1f2f3',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 18.95,
    elevation: 1,
    zIndex: 1,
    backgroundColor: '#F4F4F4',
    borderBottomColor: '#D1D1D1',
    borderBottomWidth: 1,
  },
  subContainer: {
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'space-between'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    shadowColor: '#f1f2f3',
  },
  itemNameText: {
    fontSize: 16,
    fontWeight: '600'
  },
  itemTitleText: {
    fontSize: 16,
    fontWeight: '400',
  },
  itemDateText: {
    paddingTop: 6,
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default Comments