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
import PropTypes from 'prop-types';
// import MediaPlayer from "react-native-media-player";
// import { TrackPlayer, ProgressBar } from 'react-native-track-player';


// import {series_number} from './Series1.js';
// import {sermon_number} from './Series1.js';

import chinaBridgeLogo1 from '../../resources/China-Bridge-Logo1.png'
import * as settingsData from '../Settings/settings.json';
var font_size = settingsData.fontsize;
import * as seriesData from './series.json';


var barheight = Dimensions.get('window').height * 0.07;
var wdt = Dimensions.get('window').width * 0.9;
var hei = Dimensions.get('window').width * 0.7 * 0.9;
var mgn = Dimensions.get('window').width * 0.05;


var button_text = "Download \u2193";
/*
if (data.downloaded == 1) {
    button_text = "Downloaded \u2713";
};
*/

// Set media player
// MediaPlayer.setVirtualScreenLayout(mgn, 100, wdt, hei, false);
// MediaPlayer.setBackground('resources/China-Bridge-Logo1.png');
/*
TrackPlayer.setupPlayer().then(() => {
    // The player is ready to be used
});

track = {
    id: filename,

    //url: 'http://example.com/avaritia.mp3', // Load media from the network
    url: filepath, // Load media from the app bundle

    title: data.title,
    artist: data.speaker,
    album: data.series,
    genre: 'Sermon',
    date: data.date, // RFC 3339

    //artwork: 'http://example.com/avaritia.png', // Load artwork from the network
    artwork: require('resources/China-Bridge-Logo1.png'), // Load artwork from the app bundle
};

TrackPlayer.add([track]).then(function() {
    // The tracks were added
});

          <ProgressBar
              progress={this.getProgress()}
              buffered={this.getBufferedProgress()}
          />

*/
export default class gen_sermon_page extends Component<{}> {
  static navigationOptions = {
      title: 'Sermon',
      headerStyle: {
          backgroundColor: '#F3F3F3',
          height: barheight,
      },
      headerTintColor: 'black',
      headerTitleStyle: {
          fontWeight: 'bold',
      },
  };

  /*static propTypes = {
      sermon_number: PropTypes.number.isRequired,
      series_number: PropTypes.number.isRequired,
  };*/

  onLayout(e) {
      const {width, height} = Dimensions.get('window')
      console.log(width, height)
  };

  play_media() {
      //TrackPlayer.play();
  };

  download() { /*
    if (data.downloaded == 0) {
        data.downloaded == 1;
        button_text = "Downloaded \u2713";
    }; */
    alert("This sermon has been downloaded");
  };

  share() {

  };

  render() {
  	const {navigation} = this.props;
  	const series_number = navigation.getParam('series_number', 0)
  	const sermon_number = navigation.getParam('sermon_number', 0)
  	var a = 'series';
	var b = 'sermon';
	var c = series_number.toString();
	var d = sermon_number.toString();
	var e = '_';
	var f = '.mp3';
	var g = './Media/';

	const Series = a.concat(c);
	const Sermon = b.concat(d);
	const temp2 = Series.concat(e);
	const temp3 = temp2.concat(Sermon);
	const filename = temp3.concat(f);
	const filepath = g.concat(filename);

	const temp = seriesData[Series];
	const temp1 = temp.sermons;
	const data = temp1[Sermon];

    return (
      <ScrollView onLayout={this.onLayout.bind(this)}>
        <View style = {styles.container}>
          <View style = {{alignItems: 'center'}}><Text style = {styles.title1}>{data.title}</Text></View>
          <Image source={chinaBridgeLogo1} style = {styles.image}/>

          <View style = {styles.button_cont}>
              <TouchableOpacity style = {styles.button} onPress={() => this.download()}>
                  <Text style={{color:'#FFFFFF', fontSize: 18, fontWeight: 'bold'}}>{button_text}</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.button} onPress={() => this.share()}>
                  <Text style={{color:'#FFFFFF', fontSize: 18, fontWeight: 'bold'}}>{"Share \u2191"}</Text>
              </TouchableOpacity>
          </View>

          <Text style = {styles.desc}>Series: {data.series}</Text>
          <Text style = {styles.desc}>Date: {data.date}</Text>
          <Text style = {styles.desc}>Speaker: {data.speaker[0]}</Text>
          <Text style = {styles.desc}>Translator: {data.translator[0]}</Text>
        </View>
      </ScrollView>
    );
  }
}

var sides = Dimensions.get('window').width * 0.05;
var topbot = Dimensions.get('window').height * 0.02;


const styles = StyleSheet.create({
  container: {
      margin: mgn,
  },
  button: {
      backgroundColor: '#245D8C',
      justifyContent: 'center',
      alignItems: 'center',
      height: Dimensions.get('window').height * 0.065,
      width: wdt * 0.45,
      borderRadius: 5,
      margin: 10,
  },
  button_cont: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
  },
  image: {
      width: wdt,
      height: hei,
      marginTop: topbot,
      marginBottom: topbot,
      marginLeft: 0,
      marginRight: 0,
      borderRadius: 0,
  },
  desc: {
      fontSize: font_size,
      marginTop: 5,
      marginBottom: 5,
      //fontWeight: 'bold',
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
