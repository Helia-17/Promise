import React from 'react';
import { View, ScrollView } from 'react-native';
import AccordionView from '../../components/MyPillNowPill/AccordionView';

const MyPillNowPill = ({navigation}) => {
  return (
    
      <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
        <AccordionView navigation={navigation}/>
      </ScrollView>
    
    );
};
export default MyPillNowPill;