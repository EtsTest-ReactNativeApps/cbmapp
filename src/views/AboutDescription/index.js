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

import chinaBridgeLogo from '../../resources/China-Bridge-Logo.png'
import resource1 from '../../resources/1.png'
import * as settingsData from '../Settings/settings.json';

var font_size = settingsData.fontsize;
var barheight = Dimensions.get('window').height * 0.07;

export default class AboutDescription extends Component<{}> {
  static navigationOptions = {
      title: 'About Us',
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
          <View style = {styles.containerinner}>
            <Image source={chinaBridgeLogo} style = {styles.image}/>
          </View>
          <Text style = {styles.title}>Ministry Introduction</Text>
          <Text style = {styles.desc}>The Gospel China Bridge ministry is mainly for Chinese Christians. We hold 4-6 conferences each year. he purpose of our ministry is to provide biblical Christian teaching to our brothers and sisters.</Text>
          <Text style = {styles.desc}>The lecturers of “Gospel China Bridge” are mostly from the English-speaking world. They are conservative, loyal to the Word of God, and have a burden for teaching Chinese Christians. </Text>
          <Text style = {styles.desc}>Our common vision is to help the Chinese churches return to the orthodox beliefs revealed in the Bible, to pass on the ancient gospel recognized by saints in history, to resist the impact of teachings incompatible with the Bible in the modern church, to help the people of God stand firm in the faith. </Text>
          <Text style = {styles.desc}>We currently provide free videos and audio recordings of the China Bridge conferences. Our speakers allow the sharing of their sermons in local churches.</Text>
          <Image source={resource1} style = {styles.image1}/>
          <View style = {{alignItems: 'center'}}>
              <Text style = {styles.contactinfo}>107 Timberbank Blvd, Scarbrough, ON M1W 1Z8</Text>
              <Text style = {styles.contactinfo}>1-647-859-0888</Text>
              <Text style = {styles.contactinfo}>patrickyan@christgc.org</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

var mgn = Dimensions.get('window').width * 0.05;
var wdt = Dimensions.get('window').width * 0.7;
var hei = Dimensions.get('window').width * 0.3833 * 0.7;
var sides = Dimensions.get('window').width * 0.1;
var topbot = Dimensions.get('window').height * 0.1;


const styles = StyleSheet.create({
  container: {
      margin: mgn,
  },
  containerinner: {
      margin: 0,
      backgroundColor: '#245D8C',
      borderRadius: sides,
  },
  image: {
      width: wdt,
      height: hei,
      marginTop: topbot,
      marginBottom: topbot,
      marginLeft: sides,
      marginRight: sides,
  },
  image1: {
      marginTop: 20,
      marginBottom: 20,
      width: Dimensions.get('window').width * 0.9,
  },
  desc: {
      fontSize: font_size,
      marginTop: 8,
      marginBottom: 8,
  },
  title: {
      fontSize: 20,
      marginTop: 20,
      marginBottom: 8,
      fontWeight: 'bold',
  },
  contactinfo: {
      fontSize: 14,
      marginTop: 5,
      marginBottom: 5,
  }
});
