'use strict';

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { ContainerOuter, ContainerInnerLeft, ContainerInnerRight, Text1, Text2 } from './styles.js';
// import ScrollPicker from 'react-native-wheel-scroll-picker';
// ADD SCROLL PICKER TO FONTSIZE AND PUSH-NOTIFICATIONS


// var barheight = Dimensions.get('window').height * 0.07;

// Read json file
import * as settingsData from './settings.json';
// var fs = require('react-native-fs');

var pushnotifications = 'ON';
if (settingsData.push_notifications == 0) {
    pushnotifications = 'OFF';
}

export default class Settings extends Component<{}> {
  static navigationOptions = {
      title: 'Settings',
      headerStyle: {
          backgroundColor: '#F3F3F3',
          height: 7%,
      },
      headerTintColor: 'black',
      headerTitleStyle: {
          fontWeight: 'bold',
      },
  };

  onLayout(e) {
      const {width, height} = Dimensions.get('window')
      console.log(width, height)
  };

  render() {
    return (
      <ScrollView onLayout={this.onLayout.bind(this)}>
          <ContainerOuter>
              <ContainerInnerLeft><Text1>Language</Text1></ContainerInnerLeft>
              <ContainerInnerRight><Text2>{settingsData.language}</Text2></ContainerInnerRight>
          </ContainerOuter>
          <ContainerOuter>
              <ContainerInnerLeft><Text1>Font Size</Text1></ContainerInnerLeft>
              <ContainerInnerRight><Text2>{settingsData.fontsize}</Text2></ContainerInnerRight>
          </ContainerOuter>
          <ContainerOuter>
              <ContainerInnerLeft><Text1>Push Notifications</Text1></ContainerInnerLeft>
              <ContainerInnerRight><Text2>{pushnotifications}</Text2></ContainerInnerRight>
          </ContainerOuter>
      </ScrollView>
    );
  }
}

