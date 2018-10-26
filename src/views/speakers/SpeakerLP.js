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

import * as settingsData from './settings.json';
var font_size = settingsData.fontsize;
var barheight = Dimensions.get('window').height * 0.07;

export default class SpeakerLP extends Component<{}> {
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
          <View style = {{alignItems: 'center'}}><Text style = {styles.title1}>Larry Pan</Text></View>
          <Image source = {require('resources/LP.jpg')} style = {styles.image}/>
          <Text style = {styles.desc}>Larry Pan was born in Taiwan.</Text>
          <Text style = {styles.desc}>He immigrated to Hong Kong with his parents in 1973 and went to study in Canada in 1975. Upon his conversion to Christ in 1977, he went to study in Millar Memorial Bible Institute for three years in preparation for the ministry.</Text>
          <Text style = {styles.desc}>After graduating in 1980, he went to Thailand as a missionary for two years (1982-1984). In 1985 the Lord led him on to Asia where he served as a “tent-maker”.</Text>
          <Text style = {styles.desc}>Later he met his wife; they were married in 1990 and returned to the U.S. for further training. Two years later they set out again to evangelize in former USSR, then they returned to serve in Asia for nearly eight years. Presently they are ministering among the new immigrants from China in L.A. city in a missionary capacity.</Text>

          <Text style = {styles.title2}>Series:</Text>
          <TouchableOpacity><Text style = {styles.desc}>The Christian Family</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>Knowing God</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>The Perfection of God</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>The Omniscience of God</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>The Holiness of God</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>Our Response to God's Holiness</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>The Servant Song</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>The Righteousness of God</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>The Biblical Family</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>God is Truth</Text></TouchableOpacity>
          <TouchableOpacity><Text style = {styles.desc}>The Faithfulness of God</Text></TouchableOpacity>
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