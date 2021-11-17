import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyPillHistoryList = ({ item }) => {
  console.log("HistoryView : ", item);
  return (
    <TouchableOpacity style={styles.alarmHistoryList}>
      <View style={{width: '100%'}}>
        <View style={styles.mediInfoTitleContainer}>
            <Icon name='pill' color='black' size={20}/>
            <Text style={styles.mediInfoNameText}>{item.mediinfo.name}</Text>
        </View>
        <View style={styles.mediInfoContent}>
          <Text style={styles.thTimeText}>{item.date}</Text>
          <Text style={styles.alarmTitleText}>{item.memo}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  alarmHistoryList: {
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#BBBBBBB',
    borderRadius: 5,
    borderWidth: 0.3,
    marginTop: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mediInfoTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mediInfoContent: {
    paddingVertical: 5,
  },
  mediInfoNameText: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: '400'
  },
  thTimeText: {
    marginVertical: 2,
    fontSize: 16,
    fontWeight: '400'
  },
  alarmTitleText: {
    marginVertical: 2,
    fontSize: 16,
    fontWeight: '400'
  },
})
export default MyPillHistoryList;