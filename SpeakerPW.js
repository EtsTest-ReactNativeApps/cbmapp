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

var titlelocation = Dimensions.get('window').width * 0.23;
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

export default class SpeakerPW extends Component<{}> {
  static navigationOptions = {
      headerTitle: <LogoTitle />,
      title: 'Home',
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
          <View style = {{alignItems: 'center'}}><Text style = {styles.title1}>Paul David Washer</Text></View>
          <Image source = {require('./Resources/PW.jpg')} style = {styles.image}/>
          <Text style = {styles.desc}>Paul David Washer (born 1961) is the founder, director and missions coordinator of HeartCry Missionary Society, which supports indigenous missionary work. His sermons tend to have an evangelistic focus on the gospel and the doctrine of the assurance of salvation and predestination, and he frequently speaks against modern church practices such as the sinner’s prayer, and a focus on numerical church growth.</Text>
          <Text style = {styles.desc}>Paul Washer says he was born again while studying to become an oil and gas lawyer at the University of Texas. Upon graduation, he attended Southwestern Baptist Theological Seminary and achieved a Master of Divinity degree. He moved to Peru where he became a missionary proclaiming the gospel for 10 years, after which he returned to the United States. Washer resides in Radford, VA, where he lives with his wife and four children.</Text>

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