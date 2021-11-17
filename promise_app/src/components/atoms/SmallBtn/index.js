import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';

const SmallBtnBackground = styled.TouchableOpacity`
  color: black;
  align-items: center;
  border-radius: 5px;
  height: 30px;
  justify-content: center;
  margin-horizontal: 2px;
`;

const SmallBtn = ({backgroundColor, value, func}) => {
  return(
    <SmallBtnBackground style={backgroundColor={backgroundColor}} onPress={func}>
        <Text style={{color:'black', fontSize:15, fontWeight:'bold'}}>{value}</Text >
    </SmallBtnBackground>
  );
};
export default SmallBtn;