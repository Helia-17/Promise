import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function PostList() {
  const data = [
    {
      username: 'manon',
      title: '타이레놀 1개 vs 2개',
      date: '2021.10.18 04:34',
    },
    {
        username: '가빈리',
        title: '타이레놀 vs 게보린',
        date: '2021.10.18 04:34',
    },
    {
        username: 'JY',
        title: '진통제 뭐드시나요',
        date: '2021.10.18 04:34',
    },
    {
        username: 'JY',
        title: '진통제 뭐드시나요',
        date: '2021.10.18 04:34',
    },
    {
        username: 'JY',
        title: '진통제 뭐드시나요',
        date: '2021.10.18 04:34',
    },
    {
        username: 'JY',
        title: '진통제 뭐드시나요',
        date: '2021.10.18 04:34',
    },
    {
        username: 'JY',
        title: '진통제 뭐드시나요',
        date: '2021.10.18 04:34',
    },
    {
        username: 'JY',
        title: '진통제 뭐드시나요',
        date: '2021.10.18 04:34',
    },
  ]; //길이가 긴 Array 라고 가정

  const navigation = useNavigation(); 

  return (
    <FlatList
      data={data}
      renderItem={({item, i}) => (
        <TouchableHighlight onPress={()=>navigation.navigate('게시물')} underlayColor="white">
        <View style={styles.container} key={i}>
            <View>
                <Text style={styles.itemNameText}>{item.username}</Text>
                <Text style={styles.itemTitleText}>{item.title}</Text>
            </View>
            <View>
                <Text style={styles.itemDateText}>
                {item.date}
                </Text>
            </View>
        </View>
        </TouchableHighlight>
      )}
    />
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
    height: 120,
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
  itemNameText: {
    fontSize: 16,
    fontWeight: '600'
  },
  itemTitleText: {
    fontSize: 16,
    fontWeight: '400',
    paddingVertical: 25,
  },
  itemDateText: {
    paddingTop: 6,
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '500',
  },
});