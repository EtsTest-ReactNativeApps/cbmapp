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

import * as speakerData from './speakers.json';
// var speakerid = { id: '' };

var barheight = Dimensions.get('window').height * 0.07;

export default class SpeakerMain extends Component<{}> {
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

  /*
  navigateto(speakerinitials) {
      speakerid.id = speakerinitials;
      this.props.navigation.navigate('SpeakerPage');
  }; */

  render() {
    return (
      <ScrollView onLayout={this.onLayout.bind(this)}>
        <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Speaker1')}>
            <Image source = {require('resources/JH.jpg')} style={styles.icon}/>
            <View style={styles.text}>
                <Text style={styles.menutitle}>Justin Huffman</Text>
                <Text style={styles.menutext}>Series: In the Beginning</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Speaker2')}>
            <Image source = {require('resources/MD.jpg')} style={styles.icon}/>
            <View style={styles.text}>
                <Text style={styles.menutitle}>Michael Durham</Text>
                <Text style={styles.menutext}>Series: Desperate Dependence, The Doctrine of Faith, A study of The Bride of Christ, The Church-Household of the living God</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Speaker3')}>
            <Image source = {require('resources/JT.jpg')} style={styles.icon}/>
            <View style={styles.text}>
                <Text style={styles.menutitle}>Jamey Tucker</Text>
                <Text style={styles.menutext}>Series: </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Speaker4')}>
            <Image source = {require('resources/PW.jpg')} style={styles.icon}/>
            <View style={styles.text}>
                <Text style={styles.menutitle}>Paul David Washer</Text>
                <Text style={styles.menutext}>Series: The Christian Family, Knowing God, The Perfection of God, The Omniscience of God, The Holiness of God, Our Response to God's Holiness, ...</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Speaker5')}>
            <Image source = {require('resources/LP.jpg')} style={styles.icon}/>
            <View style={styles.text}>
                <Text style={styles.menutitle}>Larry Pan</Text>
                <Text style={styles.menutext}>Series: The Christian Family, Knowing God, The Perfection of God, The Omniscience of God, The Holiness of God, Our Response to God's Holiness, ...</Text>
            </View>
        </TouchableOpacity>
      </ScrollView>
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
      backgroundColor: '#F3F3F3',
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
      borderRadius: hei*0.4,
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
      marginBottom: 6,
  },
  menutext: {
      fontSize: 12,
  },
  text: {
      width: a,
  },
});