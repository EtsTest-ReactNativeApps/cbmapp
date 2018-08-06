'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { NavigationActions } from 'react-navigation';


var titlelocation = Dimensions.get('window').width * 0.27;
var barheight = Dimensions.get('window').height * 0.07;

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={{ marginLeft: titlelocation, fontSize: 19, fontWeight: 'bold' }}>Series</Text>
      </View>
    );
  }
}

// Read json file
import * as settingsData from './settings.json';
var fs = require('react-native-fs');

var pushnotifications = 'ON';
if (settingsData.push_notifications == 0) {
    pushnotifications = 'OFF';
}

export default class SettingsPage extends Component<{}> {
  static navigationOptions = {
      headerTitle: <LogoTitle />,
      title: 'Menu',
      headerStyle: {
          backgroundColor: '#F3F3F3',
          height: barheight,
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
          <View style={styles.container_outer}>
              <View style={styles.container_inner_left}><Text style={{fontSize:20, fontWeight:'bold', marginLeft: 20}}>Language</Text></View>
              <View style={styles.container_inner_right}><Text style={{fontSize:20}}>{settingsData.language}</Text></View>
          </View>
          <View style={styles.container_outer}>
              <View style={styles.container_inner_left}><Text style={{fontSize:20, fontWeight:'bold', marginLeft: 20}}>Font Size</Text></View>
              <View style={styles.container_inner_right}><Text style={{fontSize:20}}>{settingsData.fontsize}</Text></View>
          </View>
          <View style={styles.container_outer}>
              <View style={styles.container_inner_left}><Text style={{fontSize:20, fontWeight:'bold', marginLeft: 20}}>Push Notifications</Text></View>
              <View style={styles.container_inner_right}><Text style={{fontSize:20}}>{pushnotifications}</Text></View>
          </View>
      </ScrollView>
    );
  } 
}

var wdt = Dimensions.get('window').width * 0.8;
var hei = Dimensions.get('window').width * 0.3833 * 0.8;
var sides = Dimensions.get('window').width * 0.05;
var topbot = Dimensions.get('window').height * 0.1;

var a = Dimensions.get('window').height * 0.17;
var b = Dimensions.get('window').width * 0.30;
var c = Dimensions.get('window').width * 0.70;


const styles = StyleSheet.create({
  container_outer: {
      marginTop: 1,
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      height: topbot,
  },
  container_inner_left: {
      width: c,
      justifyContent: 'center',
  },
  container_inner_right: {
      width: b,
      justifyContent: 'center',
  },
  header: {
      height: hei,
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 0,
      backgroundColor: 'F3F3F3',
  },
  headertext: {
      color: 'black',
      fontWeight: 'bold',
  },
});