import React, {useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import styled from 'styled-components/native';
import Page from './Page';
import ChartPage from '../../pages/ChartPage';

const Container = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

// const Indicator = styled.View<{focused}>`
const Indicator = styled.View`
  margin: 0px 4px;
//   background-color: ${(props) => (props.focused ? '#262626' : '#dfdfdf')};
  background-color: #dfdfdf;
  width: 6px;
  height: 6px;
  border-radius: 3px;
`;

const IndicatorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

export default function Carousel({pages, pageWidth, gap, offset}) {
  const [page, setPage] = useState(0);

  function renderItem({item}) {
    return (
    <>
      <View style={{backgroundColor:'#FDECB0', width: pageWidth, marginHorizontal: gap / 2}}>
        <ChartPage />
      </View>
      <View style={{backgroundColor:'#FDECB0', width: pageWidth, marginHorizontal: gap / 2}}>
        <Text>펫 위치</Text>
      </View>
      {/* <Page item={item} style={{width: pageWidth, marginHorizontal: gap / 2}} />
      <Page item={item} style={{width: pageWidth, marginHorizontal: gap / 2}} /> */}
    </>
    );
  }

  const onScroll = (e) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap),
    );
    setPage(newPage);
  };

  return (
    <Container>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2,
        }}
        data={pages}
        decelerationRate="fast"
        horizontal
        keyExtractor={(item) => `page__${item.color}`}
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
      <IndicatorWrapper>
        {Array.from({length: pages.length}, (_, i) => i).map((i) => (
          <Indicator key={`indicator_${i}`} focused={i === page} />
        ))}
      </IndicatorWrapper>
    </Container>
  );
}