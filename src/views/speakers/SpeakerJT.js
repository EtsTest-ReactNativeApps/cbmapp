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

import jtImg from '../../resources/JT.jpg'
import * as settingsData from '../Settings/settings.json';
var font_size = settingsData.fontsize;
var barheight = Dimensions.get('window').height * 0.07;


export default class SpeakerJT extends Component<{}> {
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
          <View style = {{alignItems: 'center'}}><Text style = {styles.title1}>Jamey Tucker</Text></View>
          <Image source={jtImg} style = {styles.image}/>
          <Text style = {styles.desc}>I am Pastor Jamey Tucker. The Lord has blessed my life with a godly and supportive wife, Jessica, to whom I have been married since July 31, 1993. Since our union in marriage we have been favored by the Lord with eight children (Hannah, Abi, Gracie, Zachariah, Zebedee, Lydia, Ida-Marie, and Malachi). “Children are an heritage of the Lord: and the fruit of the womb is his reward”.</Text>
          <Text style = {styles.desc}>I currently serve as pastor of Eureka Primitive Baptist Church. Eureka is a tremendously generous church which seeks to exhibit through doctrine and pure lives the glory and grace of Jesus Christ. Please feel free and welcome to contact me for further details, questions, commnets, and spiritual communication.</Text>

          <Text style = {styles.title2}>Series:</Text>
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
