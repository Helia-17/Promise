import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

export default function PostList() {

  const communityList = useSelector((state) => state.community.communityList);

  const navigation = useNavigation(); 

  return (
    <FlatList
      data={communityList}
      renderItem={({item, i}) => (
        <TouchableHighlight onPress={()=>navigation.navigate('communitydetail')} underlayColor="white">
        <View style={styles.container} key={item.commuId}>
            <View>
                <Text style={styles.itemNameText}>{item.userNickname}</Text>
                <Text style={styles.itemTitleText}>{item.commuTitle}</Text>
            </View>
            <View>
                <Text style={styles.itemDateText}>
                {item.commuDate}
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