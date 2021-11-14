import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableHighlight, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CommentBtn from '../atoms/CommentBtn';

export default function Comments() {
    const comments = [
        {
          username: '호셉',
          title: '타이레놀 2개 킹정합니다.',
          date: '2021.10.18 04:34'
        },
        {
          username: 'JY',
          title: '타이레놀 2개 킹정합니다.',
          date: '2021.10.18 04:34'
        },
        {
          username: 'JY',
          title: '타이레놀 2개 킹정합니다.',
          date: '2021.10.18 04:34'
        },
        {
          username: 'JY',
          title: '타이레놀 2개 킹정합니다.',
          date: '2021.10.18 04:34'
        },
        {
          username: 'JY',
          title: '타이레놀 2개 킹정합니다.',
          date: '2021.10.18 04:34'
      },
      {
        username: '호셉',
        title: '타이레놀 2개 킹정합니다.',
        date: '2021.10.18 04:34'
      },
      {
        username: 'JY',
        title: '타이레놀 2개 킹정합니다.',
        date: '2021.10.18 04:34'
      },
      {
        username: '호셉',
        title: '타이레놀 2개 킹정합니다.',
        date: '2021.10.18 04:34'
      },
      {
        username: 'JY',
        title: '타이레놀 2개 킹정합니다.',
        date: '2021.10.18 04:34'
      },
      {
        username: '호셉',
        title: '타이레놀 2개 킹정합니다.',
        date: '2021.10.18 04:34'
      },
      {
        username: 'JY',
        title: '타이레놀 2개 킹정합니다.',
        date: '2021.10.18 04:34'
      },
      {
        username: '호셉',
        title: '타이레놀 2개 킹정합니다.',
        date: '2021.10.18 04:34'
      },
      {
        username: 'JY',
        title: '타이레놀 2개 킹정합니다.',
        date: '2021.10.18 04:34'
      },

        

    ]

  const navigation = useNavigation(); 

  return (
    <FlatList
      data={comments}
      renderItem={({item, i}) => (
        <TouchableHighlight underlayColor="white">
          <View style={styles.container} key={i}>
              <View>
                  <Text style={styles.itemNameText}>{item.username}</Text>
                  <Text style={styles.itemTitleText}>{item.title}</Text>
              </View>
              <View style={styles.subcontainer}>
                    <Text style={styles.itemDateText}>
                    {item.date}
                    </Text>
                  <CommentBtn backgroundColor='#FF6464' value='삭제' />
              </View>
          </View>
        </TouchableHighlight>
      )}
    />
    // <ScrollView styles={{height: '100%'}}>
    //   {comments.map(function(item, i){
    //       return (
    //         <TouchableHighlight key={i} onPress={()=>navigation.navigate('게시물')} underlayColor="white">
    //           <View style={styles.container} >
    //               <View>
    //                   <Text style={styles.itemNameText}>{item.username}</Text>
    //                   <Text style={styles.itemTitleText}>{item.title}</Text>
    //               </View>
    //               <View>
    //                   <Text style={styles.itemDateText}>
    //                   {item.date}
    //                   </Text>
    //               </View>
    //           </View>
    //       </TouchableHighlight>
    //       );
    //   })}
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 1,
    marginHorizontal: 0,
    paddingVertical: 12,
    paddingHorizontal: 14,
    height: 80,
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
  subcontainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    paddingVertical: 10,
  },
  itemDateText: {
    paddingTop: 6,
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '500',
  },
});