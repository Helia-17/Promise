import React, {useState, useEffect} from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, AppRegistry, processColor, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RoundBtn from '../../components/atoms/RoundBtn'; 
import SearchBar from '../../components/community/SearchBar';
import PostList from '../../components/community/PostList';
import exampleImg from '../../assets/Promise_Logo.png';
import FastImage from 'react-native-fast-image'

const PetPage = ({navigation}) => {
    const [petName, setPetName] = useState('넹넹이똥똥')
    const [petLevel, setPetLevel] = useState(3)

    return (
      <View style={{height: '90%', justifyContent: 'center', paddingHorizontal: 20, paddingTop: 30}}>

        {/* <Text style={styles.titleText}>건강한 나를 위한 '약속'</Text> */}
        <View style={styles.messageContainer}>
            <View style={{width: '80%'}}> 
                <Text style={styles.messageText}>마농님의 넹넹이똥똥(은)는</Text>
                <Text style={styles.messageText}>약속과 함께 자라고 있어요!</Text>
            </View>
        </View>
        <View style={styles.container}>
            <FastImage
            style={{ width: 300, height: 300 }}
            source={require("../../assets/L3.gif")}
            resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.petNameText}>{petName}</Text>
            <Text style={styles.petLevelText}>Lv.{petLevel}</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
    maxHeight: 600,
    // elevation: 2,
  },
  titleText: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: '500',
    paddingVertical: 8,
  },
  messageContainer: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  messageText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center'
  },
  petContainer: {
    // flex: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
    // borderColor: 'black',
    // borderWidth: 1
  },
  petImage: {

    width: 200,
    height: 200,
    // borderColor: 'black',
    // borderWidth: 1
  },
  petNameText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center'
  },
  petLevelText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 5
  },
});

export default PetPage;