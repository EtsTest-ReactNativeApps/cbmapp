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

import aboutImg from '../../resources/About.png'
import calendarImg from '../../resources/Calendar.png'
import chinaBridgeLogo from '../../resources/China-Bridge-Logo.png'
import contactUsImg from '../../resources/Contact.png'
import downloadIcon from '../../resources/Download.png'
import playIcon from '../../resources/Play.png'
import settingsImg from '../../resources/Settings.png'
import speakerImg from '../../resources/Speakers.png'
import webImg from '../../resources/Web.png'

var barheight = Dimensions.get('window').height * 0.07;

export default class SideMenu extends Component<{}> {
	static navigationOptions = {
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

  // Replace the icons with a set of custom ones

  render() {
    return (
      <ScrollView onLayout={this.onLayout.bind(this)}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <View style = {styles.container}>
            <Image source={chinaBridgeLogo} style={styles.image}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Announcements')}>
            <Image source={calendarImg} style={styles.icon}/>
            <Text style={styles.menutext}>Announcements</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Downloads')}>
            <Image source={downloadIcon} style={styles.icon}/>
            <Text style={styles.menutext}>Downloads</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('SeriesHome')}>
            <Image source={playIcon} style={styles.icon}/>
            <Text style={styles.menutext}>Series</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Speakers')}>
            <Image source={speakerImg} style={styles.icon}/>
            <Text style={styles.menutext}>Speakers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Web')}>
            <Image source={webImg} style={styles.icon}/>
            <Text style={styles.menutext}>Web Page</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('About')}>
            <Image source={aboutImg} style={styles.icon}/>
            <Text style={styles.menutext}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Contact')}>
            <Image source={contactUsImg} style={styles.icon}/>
            <Text style={styles.menutext}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Settings')}>
            <Image source={settingsImg} style={styles.icon}/>
            <Text style={styles.menutext}>Settings</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

var wdt = Dimensions.get('window').width * 0.8;
var hei = Dimensions.get('window').width * 0.3833 * 0.8;
var sides = Dimensions.get('window').width * 0.1;
var topbot = Dimensions.get('window').height * 0.05;
var h = Dimensions.get('window').height * 0.28;


const styles = StyleSheet.create({
  container: {
      height: h,
      marginTop: 0,
      backgroundColor: '#245D8C',
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
  image: {
      width: wdt,
      height: hei,
      marginTop: topbot,
      marginBottom: topbot,
      marginLeft: sides,
      marginRight: sides,
  },
  icon: {
      width: hei/2,
      height: hei/2,
      marginLeft: hei/3,
      marginRight: hei/3,
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
  menutext: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
  },
});
