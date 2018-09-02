//'use strict';

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
import FileSystem from 'react-native-filesystem';


var barheight = Dimensions.get('window').height * 0.07;

// Read json file
import * as seriesData from './series.json';
const series1_data = seriesData.series1;
const sermons_data = series1_data.sermons;
var series_number = 1;
var sermon_number = 1;

var i = 0;
var j = series1_data.no_of_sermons;

var button_text = "Download All  \u2193";
for (const sermon in sermons_data) {
    if (sermon.downloaded == 1) {
        //alert(i);
        i += 1;
        continue;
    }
};
if (i >= j) {
    button_text = "Downloaded  \u2713";
};


export default class Series_1 extends Component<{}> {
  static navigationOptions = {
      title: 'Series',
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

  download_all() {
      var content = seriesData; 
      for (const sermon in content.series1.sermons) {
          sermon.downloaded = 1;
      };
      FileSystem.writeToFile('./series.json', content);
      button_text = "Downloaded  \u2713";
      alert ("This series has been downloaded");
  };

  go_to_sermon(series_no, sermon_no) { // NOT CHANGING THE GLOBAL VARIABLES
      series_number = series_no;
      sermon_number = sermon_no;
      this.props.navigation.navigate('Sermon');
      return series_number, sermon_number;
  };

  // Generate the blocks based on the JSON file
  render() {
    return (
      <ScrollView onLayout={this.onLayout.bind(this)}>
          <View style={styles.titlearea}>
              <Text style={{fontSize:22, fontWeight:'bold', color:'#245D8C'}}>{series1_data.title}</Text>
              <Text style={{fontSize:16, color:'#c69f1b', marginBottom: 20}}>{series1_data.time}</Text>

              <TouchableOpacity style = {styles.button} onPress={() => this.download_all()}>
                  <Text style={{color:'#FFFFFF', fontSize: 18, fontWeight: 'bold'}}>{button_text}</Text>
              </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.container} onPress={() => this.go_to_sermon(1, 1)}>
              <View style={styles.calendardate}>
                <Text style={styles.calendardatetext}>Sermon</Text>
                <Text style={styles.calendardatetext1}>1/8</Text>
              </View>
              <View style={styles.calendarevent}>
                <Text style={{fontSize:16, color:'#245D8C', fontWeight:'bold'}}>{sermons_data.sermon1.title}</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: {sermons_data.sermon1.speaker[0]}</Text>
                <Text style={{fontSize:13}}>Translator: {sermons_data.sermon1.speaker[0]}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container} onPress={() => this.go_to_sermon(1, 2)}>
              <View style={styles.calendardate}>
                <Text style={styles.calendardatetext}>Sermon</Text>
                <Text style={styles.calendardatetext1}>2/8</Text>
              </View>
              <View style={styles.calendarevent}>
                <Text style={{fontSize:16, color:'#245D8C', fontWeight:'bold'}}>{sermons_data.sermon2.title}</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: {sermons_data.sermon2.speaker[0]}</Text>
                <Text style={{fontSize:13}}>Translator: {sermons_data.sermon2.speaker[0]}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container} onPress={() => this.go_to_sermon(1, 3)}>
              <View style={styles.calendardate}>
                <Text style={styles.calendardatetext}>Sermon</Text>
                <Text style={styles.calendardatetext1}>3/8</Text>
              </View>
              <View style={styles.calendarevent}>
                <Text style={{fontSize:16, color:'#245D8C', fontWeight:'bold'}}>{sermons_data.sermon3.title}</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: {sermons_data.sermon3.speaker[0]}</Text>
                <Text style={{fontSize:13}}>Translator: {sermons_data.sermon3.speaker[0]}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container} onPress={() => this.go_to_sermon(1, 4)}>
              <View style={styles.calendardate}>
                <Text style={styles.calendardatetext}>Sermon</Text>
                <Text style={styles.calendardatetext1}>4/8</Text>
              </View>
              <View style={styles.calendarevent}>
                <Text style={{fontSize:16, color:'#245D8C', fontWeight:'bold'}}>{sermons_data.sermon4.title}</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: {sermons_data.sermon4.speaker[0]}</Text>
                <Text style={{fontSize:13}}>Translator: {sermons_data.sermon4.speaker[0]}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container} onPress={() => this.go_to_sermon(1, 5)}>
              <View style={styles.calendardate}>
                <Text style={styles.calendardatetext}>Sermon</Text>
                <Text style={styles.calendardatetext1}>5/8</Text>
              </View>
              <View style={styles.calendarevent}>
                <Text style={{fontSize:16, color:'#245D8C', fontWeight:'bold'}}>{sermons_data.sermon5.title}</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: {sermons_data.sermon5.speaker[0]}</Text>
                <Text style={{fontSize:13}}>Translator: {sermons_data.sermon5.speaker[0]}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container} onPress={() => this.go_to_sermon(1, 6)}>
              <View style={styles.calendardate}>
                <Text style={styles.calendardatetext}>Sermon</Text>
                <Text style={styles.calendardatetext1}>6/8</Text>
              </View>
              <View style={styles.calendarevent}>
                <Text style={{fontSize:16, color:'#245D8C', fontWeight:'bold'}}>{sermons_data.sermon6.title}</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: {sermons_data.sermon6.speaker[0]}</Text>
                <Text style={{fontSize:13}}>Translator: {sermons_data.sermon6.speaker[0]}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container} onPress={() => this.go_to_sermon(1, 7)}>
              <View style={styles.calendardate}>
                <Text style={styles.calendardatetext}>Sermon</Text>
                <Text style={styles.calendardatetext1}>7/8</Text>
              </View>
              <View style={styles.calendarevent}>
                <Text style={{fontSize:16, color:'#245D8C', fontWeight:'bold'}}>{sermons_data.sermon7.title}</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: {sermons_data.sermon7.speaker[0]}</Text>
                <Text style={{fontSize:13}}>Translator: {sermons_data.sermon7.speaker[0]}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container} onPress={() => this.go_to_sermon(1, 8)}>
              <View style={styles.calendardate}>
                <Text style={styles.calendardatetext}>Sermon</Text>
                <Text style={styles.calendardatetext1}>8/8</Text>
              </View>
              <View style={styles.calendarevent}>
                <Text style={{fontSize:16, color:'#245D8C', fontWeight:'bold'}}>{sermons_data.sermon8.title}</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: {sermons_data.sermon8.speaker[0]}</Text>
                <Text style={{fontSize:13}}>Translator: {sermons_data.sermon8.speaker[0]}</Text>
              </View>
          </TouchableOpacity>
      </ScrollView>
    );
  } 
}

export {series_number};
export {sermon_number};

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
      paddingRight: 10,
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
      backgroundColor: '#F3F3F3',
  },
  headertext: {
      color: 'black',
      fontWeight: 'bold',
  },
});