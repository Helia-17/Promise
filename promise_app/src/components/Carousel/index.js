import React, {useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import styled from 'styled-components/native';
import ChartPage from '../../pages/ChartPage';

const Container = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Indicator = styled.View`
  margin: 0px 6px;
  background-color: ${(props) => (props.focused ? '#262626' : '#C4C4C4')};
  width: 10px;
  height: 10px;
  border-radius: 5px;
`;

const IndicatorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export default function Carousel({pages, pageWidth, gap, offset}) {
  const [page, setPage] = useState(0);

  function renderItem({item}) {
    return (
    <>
      <View style={{ width: pageWidth, marginHorizontal: gap / 2}}>
        <ChartPage style={{ height: '90%'}}/>
        <IndicatorWrapper style={{ height: '10%'}}>
          {Array.from({length: 2}, (_, i) => i).map((i) => (
            <Indicator key={`indicator_${i}`} focused={i === page} />
          ))}
        </IndicatorWrapper>
      </View>
      <View style={{backgroundColor:'#FDECB0', width: pageWidth, marginHorizontal: gap / 2}}>
        <Text style={{ height: '90%'}}>펫 위치</Text>
        <IndicatorWrapper style={{ height: '10%'}}>
          {Array.from({length: 2}, (_, i) => i).map((i) => (
            <Indicator key={`indicator_${i}`} focused={i === page} />
          ))}
        </IndicatorWrapper>
      </View>
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
    </Container>
  );
}