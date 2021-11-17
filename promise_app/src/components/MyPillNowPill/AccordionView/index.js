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

  renderHeader = (section) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{section.date}</Text>
          <Icon name="chevron-down" color="black" backgroundColor='white' size={35}/>
        </View>
      </View>
    );
  };

  renderContent = (section, navigation) => {
    return (
      <View style={styles.contentList}>
      { section.contents.map((object, i) => 
        <TouchableOpacity key={i} onPress={() => {this.props.navigation.navigate('Info', {name:`${object.name}`, company:`${object.company}`})}} style={styles.contents}>
          <View style={styles.contentTextContainer}>
            <Icon name="pill" color="#5383ad" backgroundColor='white' size={20}/>
            <Text style={styles.contentText}>{object.name}</Text>
          </View>
          <Icon name="chevron-right" color="black" backgroundColor='white' size={30}/>
        </TouchableOpacity>
        )}
        <View style={styles.space}></View>
      </View>
    );
  };

  updateSections = (activeSections) => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <View style={{ width:'100%', paddingVertical:10, paddingHorizontal: 15, }} >
        <Accordion
          sections={SECTIONS}
          underlayColor={'white'}
          activeSections={this.state.activeSections}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
          onChange={this.updateSections}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  space: {
    paddingVertical: 5,
  },
  contentList: {
    borderColor: '#BBBBBB',
    borderTopWidth: 0.3,
  },
  header: {
    backgroundColor: 'white',
    // 추가해서 간격을 넓힐수 있으나 클릭하면 마진 먹은 부분이 흰색으로 변하는 현상 발견.
    // marginVertical: 5,
    paddingTop: 20,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 15,
    borderRadius: 5,
    borderColor: '#BBBBBB',
    borderWidth: 0.3,
  },
  headerText: {
    fontSize: 19,
    fontWeight: '600'
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