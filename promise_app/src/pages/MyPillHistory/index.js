import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MyPillHistoryList from '../../components/MyPillHistory/MyPillHistoryList';

const MyPillHistory = ({navigation}) => {

    const list = [
      { 
        id: 1,
        mediinfo : {
          name: '타이레놀',
          company: '(주)한국얀센'
        },
        date: '2021.10.18 04:34',
        memo: '삼성병원허리통증약'
      },
      { 
        id: 2,
        mediinfo : {
          name: '타이레놀',
          company: '(주)한국얀센'
        },
        date: '2021.10.18 04:34',
        memo: '삼성병원허리통증약'
      },
      { 
        id: 3,
        mediinfo : {
          name: '타이레놀',
          company: '(주)한국얀센'
        },
        date: '2021.10.18 04:34',
        memo: '삼성병원허리통증약'
      },
      { id: 4,
        mediinfo : {
          name: '타이레놀',
          company: '(주)한국얀센'
        },
        date: '2021.10.18 04:34',
        memo: '삼성병원허리통증약'
      },
    ]

    return (
        <View  style={{ flex: 1, alignItems: 'center', backgroundColor:'#F9F9F9' }}>
            <View style={{ width:'100%', margin:10, alignItems: 'center'}}>
                <View style={{ width:'100%', marginVertical:20, paddingVertical:10, paddingHorizontal: 20, }}>
                  <MyPillHistoryList list={list}/>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
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
  contentTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '400'
  }
})
export default MyPillHistory;