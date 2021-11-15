import React, {useState, useEffect} from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, AppRegistry, processColor, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RoundBtn from '../../components/atoms/RoundBtn'; 
import SearchBar from '../../components/community/SearchBar';
import PostList from '../../components/community/PostList';
import exampleImg from '../../assets/Promise_Logo.png';

const PetPage = ({navigation}) => {
    const [petName, setPetName] = useState('넹넹이똥똥')
    const [petLevel, setPetLevel] = useState(3)

    return (
      <View style={{height: '90%', paddingHorizontal: 20, paddingTop: 30}}>

        {/* <Text style={styles.titleText}>건강한 나를 위한 '약속'</Text> */}
        <View style={styles.messageContainer}>
            <View style={{width: '48%'}}> 
                <Text style={styles.messageText}>마농님의 넹넹이똥똥(은)는 약속과 함께 자라고 있어요!</Text>
            </View>
        </View>
        <View style={styles.container}>
            <Image
                style={styles.petImage}
                source={exampleImg}
            />
            <Text style={styles.petNameText}>{petName}</Text>
            <Text style={styles.petLevelText}>Lv.{petLevel}</Text>
            <View style={{width: '100%', padding: 5}}>
                <Text style={styles.petNextLevelText}>Lv.{petLevel+1}</Text>
            </View>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
    maxHeight: 400,
    // elevation: 2,
  },
  titleText: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: '500',
    paddingVertical: 8,
  },
  messageContainer: {
    paddingVertical: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  messageText: {
    fontSize: 14,
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
    fontWeight: '500',
    textAlign: 'center'
  },
  petLevelText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center'
  },
  petNextLevelText: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'right'
  },
});

export default PetPage;