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

import jhImg from '../../resources/JH.jpg'
import * as settingsData from '../Settings/settings.json';
var font_size = settingsData.fontsize;
var barheight = Dimensions.get('window').height * 0.07;

export default class SpeakerJH extends Component<{}> {
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

  // This is hardcoded. Change it so it can be updated real time
  render() {
    return (
      <ScrollView onLayout={this.onLayout.bind(this)}>
        <View style = {styles.container}>
          <View style = {{alignItems: 'center'}}><Text style = {styles.title1}>Justin Huffman</Text></View>
          <Image source={jhImg} style = {styles.image}/>
          <Text style = {styles.desc}>Justin is a graduate of Reformed Theological Seminary, has pastored in the U.S. for over 15 years, and has traveled to every continent except Antarctica—because, as his youngest son has observed, penguins don’t need the gospel.</Text>
          <Text style = {styles.desc}>He and his wife Chau have four children: Edmond (from Russia), Ransom and Avery (from Vietnam), and Eva (from Arkansas).</Text>
          <Text style = {styles.desc}>Justin has contributed articles to For the Church, Servants of Grace, and Reformed Perspectives Magazine.</Text>
          <Text style = {styles.desc}>He recently released the book Grow: The Command to Ever-Expanding Joy. Justin’s passion is to help people see the relevance and sufficiency of God’s Word for daily living.</Text>

          <Text style = {styles.title2}>Series:</Text>
          <TouchableOpacity>
              <Text style = {styles.desc}>In the Beginning</Text>
          </TouchableOpacity>

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
