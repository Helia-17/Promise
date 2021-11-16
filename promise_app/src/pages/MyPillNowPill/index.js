import React from 'react';
import { View, ScrollView } from 'react-native';
import AccordionView from '../../components/MyPillNowPill/AccordionView';

const MyPillNowPill = ({navigation}) => {
  return (
    <View>
      <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }} style={{ backgroundColor:'#F9F9F9' }}>
        <AccordionView navigation={navigation}/>
      </ScrollView>
    </View>
    );
};
export default MyPillNowPill;