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

// Reading json file
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("/Resources/series.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
});

export default class SeriesMenu extends Component<{}> {
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

  // Generate the blocks based on the JSON file
  render() {
    return (

    );
  }
}

var wdt = Dimensions.get('window').width * 0.8;
var hei = Dimensions.get('window').width * 0.3833 * 0.8;
var sides = Dimensions.get('window').width * 0.1;
var topbot = Dimensions.get('window').height * 0.1;

var a = Dimensions.get('window').width - hei/4 - hei*0.8 - 10;


const styles = StyleSheet.create({
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
  image: {
      width: wdt,
      height: hei,
      marginTop: topbot,
      marginBottom: topbot,
      marginLeft: sides,
      marginRight: sides,
  },
  icon: {
      width: hei*0.8,
      height: hei*0.8,
      marginLeft: hei/8,
      marginRight: hei/8,
      borderRadius: 3,
      backgroundColor: '#245D8C',
  },
  menu: {
      flexDirection: 'row',
      width: Dimensions.get('window').width,
      height: hei,
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      marginTop: 1,
      marginBottom: 1,
  },
  menutitle: {
      fontSize: 19,
      fontWeight: 'bold',
      color: '#245D8C',
  },
  datetext: {
      color: '#EECA50',
      fontSize: 13,
      marginTop: 2,
      marginBottom: 2,
  },
  menutext: {
      fontSize: 14,
      marginTop: 1,
  },
  text: {
      width: a,
  },
});