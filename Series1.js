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
import * as seriesData from './series.json';
const series1_data = seriesData.series1;
const sermons_data = series1_data.sermons;
var i = 0;
var j = series1_data.no_of_sermons;

var button_text = "Download All  \u2193";
for (const sermon in sermons_data) {
    if (sermon.downloaded == 1) {
        //console.log(i);
        i += 1;
        continue;
    }
};
if (i >= j) {
    button_text = "Downloaded  \u2713";
};

var fs = require('react-native-fs');

export default class Series_1 extends Component<{}> {
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

  // Need to fix
  download_all() {
      var content = JSON.parse(fs.readFileSync('series.json', 'utf8').toString()); // Error at readFileSync('series.json', 'utf8')
      for (const sermon in content.series1.sermons) {
          sermon.downloaded = 1;
      };
      fs.writeFile('./series.json', JSON.stringify(content), 'utf8');
      button_text = "Downloaded  \u2713";
  };

  // Generate the blocks based on the JSON file
  render() {
    return (
      <ScrollView onLayout={this.onLayout.bind(this)}>
          <View style={styles.titlearea}>
              <Text style={{fontSize:22, fontWeight:'bold', color:'#245D8C'}}>{series1_data.title}</Text>
              <Text style={{fontSize:16, color:'#E8B717', marginBottom: 20}}>{series1_data.time}</Text>

              <TouchableOpacity style = {styles.button} onPress={() => this.download_all()}>
                  <Text style={{color:'#FFFFFF', fontSize: 18, fontWeight: 'bold'}}>{button_text}</Text>
              </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.container} >
              <View style={styles.calendardate}>
                <Text style={styles.calendardatetext}>Sermon</Text>
                <Text style={styles.calendardatetext1}>1/8</Text>
              </View>
              <View style={styles.calendarevent}>
                <Text style={{fontSize:16, color:'#245D8C'}}>{sermons_data.sermon1.title}</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: {sermons_data.sermon1.speaker[0]}</Text>
                <Text style={{fontSize:13}}>Translator: {sermons_data.sermon1.speaker[0]}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container}>
              <View style={styles.calendardate}>
                <Text style={styles.calendardatetext}>Sermon</Text>
                <Text style={styles.calendardatetext1}>2/8</Text>
              </View>
              <View style={styles.calendarevent}>
                <Text style={{fontSize:16, color:'#245D8C'}}>{sermons_data.sermon2.title}</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: {sermons_data.sermon2.speaker[0]}</Text>
                <Text style={{fontSize:13}}>Translator: {sermons_data.sermon2.speaker[0]}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container}>
              <View style={styles.calendardate}>
                <Text style={styles.calendardatetext}>Sermon</Text>
                <Text style={styles.calendardatetext1}>3/8</Text>
              </View>
              <View style={styles.calendarevent}>
                <Text style={{fontSize:16, color:'#245D8C'}}>{sermons_data.sermon3.title}</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: {sermons_data.sermon3.speaker[0]}</Text>
                <Text style={{fontSize:13}}>Translator: {sermons_data.sermon3.speaker[0]}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container}>
              <View style={styles.calendardate}>
                <Text style={styles.calendardatetext}>Sermon</Text>
                <Text style={styles.calendardatetext1}>4/8</Text>
              </View>
              <View style={styles.calendarevent}>
                <Text style={{fontSize:16, color:'#245D8C'}}>{sermons_data.sermon4.title}</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: {sermons_data.sermon4.speaker[0]}</Text>
                <Text style={{fontSize:13}}>Translator: {sermons_data.sermon4.speaker[0]}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container}>
              <View style={styles.calendardate}>
                <Text style={styles.calendardatetext}>Sermon</Text>
                <Text style={styles.calendardatetext1}>5/8</Text>
              </View>
              <View style={styles.calendarevent}>
                <Text style={{fontSize:16, color:'#245D8C'}}>{sermons_data.sermon5.title}</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: {sermons_data.sermon5.speaker[0]}</Text>
                <Text style={{fontSize:13}}>Translator: {sermons_data.sermon5.speaker[0]}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container}>
              <View style={styles.calendardate}>
                <Text style={styles.calendardatetext}>Sermon</Text>
                <Text style={styles.calendardatetext1}>6/8</Text>
              </View>
              <View style={styles.calendarevent}>
                <Text style={{fontSize:16, color:'#245D8C'}}>{sermons_data.sermon6.title}</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: {sermons_data.sermon6.speaker[0]}</Text>
                <Text style={{fontSize:13}}>Translator: {sermons_data.sermon6.speaker[0]}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container}>
              <View style={styles.calendardate}>
                <Text style={styles.calendardatetext}>Sermon</Text>
                <Text style={styles.calendardatetext1}>7/8</Text>
              </View>
              <View style={styles.calendarevent}>
                <Text style={{fontSize:16, color:'#245D8C'}}>{sermons_data.sermon7.title}</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: {sermons_data.sermon7.speaker[0]}</Text>
                <Text style={{fontSize:13}}>Translator: {sermons_data.sermon7.speaker[0]}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container}>
              <View style={styles.calendardate}>
                <Text style={styles.calendardatetext}>Sermon</Text>
                <Text style={styles.calendardatetext1}>8/8</Text>
              </View>
              <View style={styles.calendarevent}>
                <Text style={{fontSize:16, color:'#245D8C'}}>{sermons_data.sermon8.title}</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: {sermons_data.sermon8.speaker[0]}</Text>
                <Text style={{fontSize:13}}>Translator: {sermons_data.sermon8.speaker[0]}</Text>
              </View>
          </TouchableOpacity>
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
  titlearea: {
      backgroundColor: '#F4EFE0',
      height: a*1.7,
      justifyContent: 'center',
      alignItems: 'center',
  },
  button: {
      backgroundColor: '#245D8C',
      justifyContent: 'center',
      alignItems: 'center',
      height: Dimensions.get('window').height * 0.07,
      width: wdt* 0.7,
      borderRadius: 5,
  },
  calendardate: {
      marginTop: 1,
      marginBottom: 1,
      width: b,
      height: a,
      justifyContent: 'center',
      alignItems: 'center',
  },
  calendardatetext: {
      fontSize: 16,
      marginTop: 1,
      marginBottom: 0,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: '#EECA50',
  },
  calendardatetext1: {
      fontSize: 16,
      marginTop: 0,
      marginBottom: 1,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 25,
      paddingRight: 25,
      backgroundColor: '#FFFFB3',
  },
  calendarevent: {
      marginTop: 1,
      marginBottom: 1,
      justifyContent: 'center',
      width: c,
      height: a,
  },
  container: {
      marginTop: 1,
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      //'#F4EFE0'
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