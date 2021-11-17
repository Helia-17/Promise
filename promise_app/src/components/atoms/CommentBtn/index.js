import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';

const CommentBtnBackground = styled.TouchableOpacity`
  width: 10%;
  color: black;
  align-items: flex-end;
  height: 20px;
  justify-content: center;
`;

const CommentBtn = ({ value, func}) => {
  return(
    <CommentBtnBackground onPress={func}>
        <Text style={{color:'black', fontSize:12, fontWeight:'500'}}>{value}</Text >
    </CommentBtnBackground>
  );
};
export default CommentBtn;