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
import { 
  NavigationActions,
} from 'react-navigation';

import speakerid from './Speaker_main.js';  // Doesn't pass anything over

import * as settingsData from './settings.json';
var font_size = settingsData.fontsize;
import * as speakerData from './speakers.json';
//alert (speakerid);
//const speaker = speakerData[speakerid];


// var titlelocation = Dimensions.get('window').width * 0.23;
var barheight = Dimensions.get('window').height * 0.07;

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={{ marginLeft: titlelocation, fontSize: 19, fontWeight: 'bold' }}>Speakers</Text>
      </View>
    );
  }
}

export default class gen_speaker_page extends Component<{}> {
  static navigationOptions = {
      
      title: 'Speakers',
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
  
  //{require(img)} doesnt work, use a switch statement for each case
  render() {
    return (
      <ScrollView onLayout={this.onLayout.bind(this)}>
        <View style = {styles.container}>
          <View style = {{alignItems: 'center'}}><Text style = {styles.title1}>{speaker.fullname}</Text></View>
          <Image source = {require("resources/JH.jpg")} style = {styles.image}/> 
          <Text style = {styles.desc}>{speaker.bio1}</Text>
          <Text style = {styles.desc}>{speaker.bio2}</Text>
          <Text style = {styles.desc}>{speaker.bio3}</Text>
          <Text style = {styles.desc}>{speaker.bio4}</Text>

          <Text style = {styles.title2}>Series:</Text>
          <TouchableOpacity><Text style = {styles.desc}>{speaker.series[0]}</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>{speaker.series[1]}</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>{speaker.series[2]}</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>{speaker.series[3]}</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>{speaker.series[4]}</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>{speaker.series[5]}</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>{speaker.series[6]}</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>{speaker.series[7]}</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>{speaker.series[8]}</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>{speaker.series[9]}</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>{speaker.series[10]}</Text></TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

var mgn = Dimensions.get('window').width * 0.05;
var wdt = Dimensions.get('window').width * 0.9;
var hei = Dimensions.get('window').width * 0.7 * 0.9;
var sides = Dimensions.get('window').width * 0.05;
var topbot = Dimensions.get('window').height * 0.02;


const styles = StyleSheet.create({
  container: {
      margin: mgn,
  },
  image: {
      width: wdt,
      height: hei,
      marginTop: topbot,
      marginBottom: topbot,
      marginLeft: 0,
      marginRight: 0,
      borderRadius: sides,
  },
  desc: {
      fontSize: font_size,
      marginTop: 8,
      marginBottom: 8,
  },
  title1: {
      fontSize: 24,
      marginTop: 20,
      marginBottom: 8,
      fontWeight: 'bold',
      color: '#245D8C',
  },
  title2: {
      fontSize: 20,
      marginTop: 20,
      marginBottom: 8,
      fontWeight: 'bold',
      color: '#245D8C',
  }
});