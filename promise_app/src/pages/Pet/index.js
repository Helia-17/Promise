import React from 'react';
import { useSelector } from 'react-redux';
import { View,  Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image'
import L1Img from '../../assets/L1.gif'
import L2Img from '../../assets/L2.gif'
import L3Img from '../../assets/L3.gif'
import L4Img from '../../assets/L4.gif'
import L5Img from '../../assets/L5.gif'

const PetPage = () => {

    const petName =  useSelector((state) => state.user.userInfo.petName)
    const petLevel =  useSelector((state) => state.user.userInfo.petLevel)
    const userNickname = useSelector((state) => state.user.userInfo.userNickname)
    const petImg = {
      1: L1Img,
      2: L2Img,
      3: L3Img,
      4: L4Img,
      5: L5Img,
    }

    return (
      <View style={{height: '90%', justifyContent: 'center', paddingHorizontal: 20, paddingTop: 30}}>
        <View style={styles.messageContainer}>
            <View style={{width: '80%'}}> 
                <Text style={styles.messageText}>{userNickname}님의 {petName}(은)는</Text>
                <Text style={styles.messageText}>약속과 함께 자라고 있어요!</Text>
            </View>
        </View>
        <View style={styles.container}>
            <FastImage
            style={{ width: 300, height: 300 }}
            source={petImg[petLevel]}
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
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 600,
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
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  petImage: {
    width: 200,
    height: 200,
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