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

import mdImg from '../../resources/MD.jpg'
import * as settingsData from '../Settings/settings.json';
var font_size = settingsData.fontsize;
var barheight = Dimensions.get('window').height * 0.07;


export default class SpeakerMD extends Component<{}> {
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
          <View style = {{alignItems: 'center'}}><Text style = {styles.title1}>Michael Durham</Text></View>
          <Image source={mdImg} style = {styles.image}/>
          <Text style = {styles.desc}>Michael Durham is pastor of Oak Grove Baptist Church in Paducah, KY. He believed to have been saved because of a prayer he prayed as a child, and even preached for over a decade before God truly converted him.</Text>
          <Text style = {styles.desc}>God called Michael into the ministry after his conversion, and in 1993 he accepted the pastorate at Oak Grove.</Text>
          <Text style = {styles.desc}>In 1995, the church launched a ministry called Living Priorities. In 2008, Living Priorities became Real Truth Matters, a ministry where Michael currently serves as director. He is also the executive director of Romania Missionary Fellowship.</Text>
          <Text style = {styles.desc}>Michael has been married to his wife, Karen, for 35 years. They have three children and one grandchild.</Text>

          <Text style = {styles.title2}>Series:</Text>
          <TouchableOpacity><Text style = {styles.desc}>Desperate Dependence</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>The Doctrine of Faith</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>A study of The Bride of Christ</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>The Church-Household of the living God</Text></TouchableOpacity>
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
