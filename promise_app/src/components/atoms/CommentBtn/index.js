import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';

const CommentBtnBackground = styled.TouchableOpacity`
  width: 50%;
  color: black;
  align-items: center;
  border-radius: 5px;
  height: 20px;
  justify-content: center;
  margin: 5px;
`;

const CommentBtn = ({backgroundColor, value, func}) => {
  return(
    <CommentBtnBackground style={backgroundColor={backgroundColor}} onPress={func}>
        <Text style={{color:'black', fontSize:12, fontWeight:'500'}}>{value}</Text >
    </CommentBtnBackground>
  );
};
export default CommentBtn;