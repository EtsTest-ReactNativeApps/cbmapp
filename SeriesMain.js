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

  render() {
    return (
      <ScrollView onLayout={this.onLayout.bind(this)}>
        <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Series1')}>
            <Image source = {require('./Resources/China-Bridge-Logo.png')} style={styles.icon}/>
            <View style={styles.text}>
                <Text style={styles.menutitle}>The Christian Family</Text>
                <Text style={styles.datetext}>MARCH 2012</Text>
                <Text style={styles.menutext}>Speaker: Paul Washer</Text>
                <Text style={styles.menutext}>Translator: Larry Pan</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
            <Image source = {require('./Resources/China-Bridge-Logo.png')} style={styles.icon}/>
            <View style={styles.text}>
                <Text style={styles.menutitle}>Our Response to God's Holiness</Text>
                <Text style={styles.datetext}>MARCH 2012</Text>
                <Text style={styles.menutext}>Speaker: Paul Washer</Text>
                <Text style={styles.menutext}>Translator: Larry Pan</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
            <Image source = {require('./Resources/China-Bridge-Logo.png')} style={styles.icon}/>
            <View style={styles.text}>
                <Text style={styles.menutitle}>Knowing God</Text>
                <Text style={styles.datetext}>AUGUST 2014</Text>
                <Text style={styles.menutext}>Speaker: Paul Washer</Text>
                <Text style={styles.menutext}>Translator: Larry Pan</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
            <Image source = {require('./Resources/China-Bridge-Logo.png')} style={styles.icon}/>
            <View style={styles.text}>
                <Text style={styles.menutitle}>The Perfection of God</Text>
                <Text style={styles.datetext}>DECEMBER 2014</Text>
                <Text style={styles.menutext}>Speaker: Paul Washer</Text>
                <Text style={styles.menutext}>Translator: Larry Pan</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
            <Image source = {require('./Resources/China-Bridge-Logo.png')} style={styles.icon}/>
            <View style={styles.text}>
                <Text style={styles.menutitle}>The Omniscience of God</Text>
                <Text style={styles.datetext}>MAY 2015</Text>
                <Text style={styles.menutext}>Speaker: Paul Washer</Text>
                <Text style={styles.menutext}>Translator: Larry Pan</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
            <Image source = {require('./Resources/China-Bridge-Logo.png')} style={styles.icon}/>
            <View style={styles.text}>
                <Text style={styles.menutitle}>The Holiness of God</Text>
                <Text style={styles.datetext}>JULY 2015</Text>
                <Text style={styles.menutext}>Speaker: Paul Washer</Text>
                <Text style={styles.menutext}>Translator: Larry Pan</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
            <Image source = {require('./Resources/China-Bridge-Logo.png')} style={styles.icon}/>
            <View style={styles.text}>
                <Text style={styles.menutitle}>The Servant Song</Text>
                <Text style={styles.datetext}>DECEMBER 2015</Text>
                <Text style={styles.menutext}>Speaker: Paul Washer</Text>
                <Text style={styles.menutext}>Translator: Larry Pan</Text>
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