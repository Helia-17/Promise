import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyPillHistoryListItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View >
        <View style={styles.contentTitleContainer}>
            <Icon name="medical-bag" color="#e67373" backgroundColor='white' size={20}/>
            <Text style={styles.contentText}>{item.mediinfo.name}</Text>
        </View>
        <View style={styles.contentTextContainer}>
          <Text style={styles.dateText}>{item.date}</Text>
          <Text style={styles.memoText}>{item.memo}</Text>
        </View>
      </View>
      <View style={styles.mediInfoIconContainer}>
        <Icon name="chevron-right" color="black" backgroundColor='white' size={30}/>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  listItem: {
    width:'100%',
    borderColor: '#626262', 
    borderBottomWidth: 1,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contentList: {
    borderColor: '#e3e3e3',
    borderTopWidth: 1,
  },
  contents: {
    backgroundColor:'white',
    borderRadius:3,
    elevation:0,
    padding: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#e3e3e3',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  contentTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  contentTextContainer: {
    paddingVertical: 5,
  },
  contentText: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: '400'
  },
  dateText: {
    marginVertical: 2,
    fontSize: 16,
    fontWeight: '400'
  },
  memoText: {
    marginVertical: 2,
    fontSize: 16,
    fontWeight: '400'
  },
  mediInfoIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }

})
export default MyPillHistoryListItem;