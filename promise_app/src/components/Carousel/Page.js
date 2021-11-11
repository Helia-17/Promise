import React from 'react';
import styled from 'styled-components/native';

const PageItem = styled.View`
  background-color: black;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const PageNum = styled.Text``;

export default function Page({item, style}) {
  return (
    <PageItem color='black' style={style}>
      <PageNum>{item.num}</PageNum>
    </PageItem>
  );
}