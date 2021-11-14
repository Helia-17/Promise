import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { withNavigation  } from '@react-navigation/native';

const SECTIONS = [
  {
    title: '에페날정, 록사펜정, 모사무라정',
    date: '2021.10.18 ~ 2021.10.21 (3일)',
    contents: [
      {
        name: '타이레놀',
        company: '(주)한국약센'
      },
      {
        name: '타이레놀',
        company: '(주)한국약센'
      },
      {
        name: '타이레놀',
        company: '(주)한국약센'
      },
    ]
  },
  {
    title: '에페날정, 록사펜정, 모사무라정',
    date: '2021.10.18 ~ 2021.10.21 (3일)',
    contents: [
      {
        name: '타이레놀',
        company: '(주)한국약센'
      },
      {
        name: '타이레놀',
        company: '(주)한국약센'
      },
      {
        name: '타이레놀',
        company: '(주)한국약센'
      },
    ]
  },
  {
    title: '에페날정, 록사펜정, 모사무라정',
    date: '2021.10.18 ~ 2021.10.21 (3일)',
    contents: [
      {
        name: '타이레놀',
        company: '(주)한국약센'
      },
      {
        name: '타이레놀',
        company: '(주)한국약센'
      },
      {
        name: '타이레놀',
        company: '(주)한국약센'
      },
    ]
  },
  {
    title: '에페날정, 록사펜정, 모사무라정',
    date: '2021.10.18 ~ 2021.10.21 (3일)',
    contents: [
      {
        name: '타이레놀',
        company: '(주)한국약센'
      },
      {
        name: '타이레놀',
        company: '(주)한국약센'
      },
      {
        name: '타이레놀',
        company: '(주)한국약센'
      },
    ]
  },
  {
    title: '에페날정, 록사펜정, 모사무라정',
    date: '2021.10.18 ~ 2021.10.21 (3일)',
    contents: [
      {
        name: '타이레놀',
        company: '(주)한국약센'
      },
      {
        name: '타이레놀',
        company: '(주)한국약센'
      },
      {
        name: '타이레놀',
        company: '(주)한국약센'
      },
    ]
  },
  {
    title: '타이레놀, 록사펜정, 모사무라정',
    date: '2021.10.18 ~ 2021.10.21 (3일)',
    contents: [
      {
        name: '타이레놀',
        company: '(주)한국약센'
      },
      {
        name: '타이레놀',
        company: '(주)한국약센'
      },
      {
        name: '타이레놀',
        company: '(주)한국약센'
      },
    ]
  },
];

class AccordionView extends Component {
  state = {
    activeSections: [],
  };

  navigation = this.props.navigation;

  _renderHeader = (section) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{section.date}</Text>
          <Icon name="chevron-down" color="black" backgroundColor='white' size={40}/>
        </View>
      </View>
    );
  };

  _renderContent = (section, navigation) => {
    
    return (
      <View style={styles.contentList}>
      { section.contents.map((object, i) => 
        <TouchableOpacity key={i} onPress={() => {this.props.navigation.navigate('NowPillInfoNav', {name:`${object.name}`, company:`${object.company}`})}} style={styles.contents}>
          <View style={styles.contentTextContainer}>
            <Icon name="pill" color="#5383ad" backgroundColor='white' size={20}/>
            <Text style={styles.contentText}>{object.name}</Text>
          </View>
          <Icon name="chevron-right" color="black" backgroundColor='white' size={30}/>
        </TouchableOpacity>
      )}
      </View>
    );
  };

  _updateSections = (activeSections) => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <View style={{ width:'100%', marginVertical:20, paddingVertical:10, paddingHorizontal: 20, }} >
      {/* <View styles={{width:'93%', marginTop:10, backgroundColor:'white', borderRadius:3, elevation:1}}> */}
        <Accordion
          sections={SECTIONS}
          underlayColor={'white'}
          activeSections={this.state.activeSections}
          // renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 1,
    marginHorizontal: 0,
    paddingHorizontal: 14,
    paddingVertical: 10,
    height: 80,
    shadowRadius: 18.95,
    elevation: 0,
    zIndex: 1,
  },
  contentList: {
    borderColor: '#e3e3e3',
    borderTopWidth: 1,
  },
  header: {
    backgroundColor:'white',
    marginVertical: 10,
    borderRadius:5,
    borderColor: '#e3e3e3',
    borderWidth: 1,
    paddingTop: 25,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 15,
    width: '100%',
    flexDirection: 'column',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '400'
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '400'
  },
  contents: {
    backgroundColor:'white',
    borderRadius:3,
    elevation:0,
    padding: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#e3e3e3',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  contentTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '400'
  }
});

export default AccordionView;