import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyPillHistoryListItem from '../MyPillHistoryListItem';

const MyPillHistoryList = ({navigation, list} ) => {

  const renderItem = ({ navigation, item }) => (
    <View style={styles.contentItem}>
      <MyPillHistoryListItem navigation={navigation} item={item}/>
    </View>
  );

  return (
    <View style={styles.contentList}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  contentList: {
    backgroundColor:'white',
    borderColor: '#e3e3e3',
    borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  contentItem: {
    borderRadius:5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  },
})
export default MyPillHistoryList;