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

var barheight = Dimensions.get('window').height * 0.07;

export default class ContactUs extends Component<{}> {
  static navigationOptions = {
      title: 'Contact Us',
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

  send_message() {

  };

  render() {
    return (
      <ScrollView onLayout={this.onLayout.bind(this)}>
        <View style = {styles.container_outer}>
          <View style = {styles.container_inner}>
              <View style = {styles.container_text}><Text style = {styles.title}>Name</Text></View>
              <TextInput style = {styles.box1}
                  underlineColorAndroid = 'transparent'
                  onChangeText = {(text) => this.setState({text})}
              />
          </View>
          <View style = {styles.container_inner}>
              <View style = {styles.container_text}><Text style = {styles.title}>Email</Text></View>
              <TextInput style = {styles.box1}
                  underlineColorAndroid = 'transparent'
                  onChangeText = {(text) => this.setState({text})}
              />
          </View>
          <View style = {styles.container_inner}>
              <View style = {styles.container_text}><Text style = {styles.title}>Phone</Text></View>
              <TextInput style = {styles.box1}
                  underlineColorAndroid = 'transparent'
                  onChangeText = {(text) => this.setState({text})}
              />
          </View>
          <TextInput style = {styles.box2}
              multiline = {true}
              numberOfLines = {20}
              placeholder = "Your message here"
              onChangeText = {(text) => this.setState({text})}
          />
          <View style = {styles.container_button}>
            <TouchableOpacity style = {styles.button} onPress={() => this.send_message()}>
              <Text style={{color:'#FFFFFF', fontSize: 19, fontWeight: 'bold'}}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

var mgn = Dimensions.get('window').width * 0.05;
var wdt = Dimensions.get('window').width * 0.9;
var hei = Dimensions.get('window').width * 0.7 * 0.9;
var sides = Dimensions.get('window').width * 0.05;


const styles = StyleSheet.create({
  container_outer: {
      margin: mgn,
  },
  container_inner: {
      flexDirection: 'row',
      marginTop: mgn,
      width: wdt,
      height: 30,
  },
  container_text: {
      width: wdt*0.23,
      //fontSize: 18,
  },
  container_button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: Dimensions.get('window').height * 0.2,
      width: wdt,
  },
  button: {
      backgroundColor: '#245D8C',
      justifyContent: 'center',
      alignItems: 'center',
      height: Dimensions.get('window').height * 0.08,
      width: wdt* 0.4,
      borderRadius: 5,
  },
  box1: {
      height: 30,
      width: wdt*0.77,
      borderWidth: 1,
      borderRadius: 3,
      backgroundColor: '#FFFFFF',
      fontSize: 16,
  },
  box2: {
      height: Dimensions.get('window').height * 0.45,
      marginTop: mgn*1.5,
      width: wdt,
      borderWidth: 1,
      borderRadius: 3,
      backgroundColor: '#FFFFFF',
      fontSize: 16,
  },
  title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#245D8C',
  },
});