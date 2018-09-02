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

import * as seriesData from './series.json';

var barheight = Dimensions.get('window').height * 0.07;

export default class SeriesMenu extends Component<{}> {
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

  render() {
    return (
      <ScrollView onLayout={this.onLayout.bind(this)}>
        <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('Series1')}>
            <Image source = {require('./Resources/ic_launcher.png')} style={styles.icon}/>
            <View style={styles.text}>
                <Text style={styles.menutitle}>{seriesData.series1.title}</Text>
                <Text style={styles.datetext}>{seriesData.series1.time}</Text>
                <Text style={styles.menutext}>Speaker: {seriesData.series1.speaker[0]}</Text>
                <Text style={styles.menutext}>Translator: {seriesData.series1.translator[0]}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
            <Image source = {require('./Resources/ic_launcher.png')} style={styles.icon}/>
            <View style={styles.text}>
                <Text style={styles.menutitle}>{seriesData.series2.title}</Text>
                <Text style={styles.datetext}>{seriesData.series2.time}</Text>
                <Text style={styles.menutext}>Speaker: {seriesData.series2.speaker[0]}</Text>
                <Text style={styles.menutext}>Translator: {seriesData.series2.translator[0]}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
            <Image source = {require('./Resources/ic_launcher.png')} style={styles.icon}/>
            <View style={styles.text}>
                <Text style={styles.menutitle}>{seriesData.series3.title}</Text>
                <Text style={styles.datetext}>{seriesData.series3.time}</Text>
                <Text style={styles.menutext}>Speaker: {seriesData.series3.speaker[0]}</Text>
                <Text style={styles.menutext}>Translator: {seriesData.series3.translator[0]}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
            <Image source = {require('./Resources/ic_launcher.png')} style={styles.icon}/>
            <View style={styles.text}>
                <Text style={styles.menutitle}>{seriesData.series4.title}</Text>
                <Text style={styles.datetext}>{seriesData.series4.time}</Text>
                <Text style={styles.menutext}>Speaker: {seriesData.series4.speaker[0]}</Text>
                <Text style={styles.menutext}>Translator: {seriesData.series4.translator[0]}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
            <Image source = {require('./Resources/ic_launcher.png')} style={styles.icon}/>
            <View style={styles.text}>
                <Text style={styles.menutitle}>{seriesData.series5.title}</Text>
                <Text style={styles.datetext}>{seriesData.series5.time}</Text>
                <Text style={styles.menutext}>Speaker: {seriesData.series5.speaker[0]}</Text>
                <Text style={styles.menutext}>Translator: {seriesData.series5.translator[0]}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
            <Image source = {require('./Resources/ic_launcher.png')} style={styles.icon}/>
            <View style={styles.text}>
                <Text style={styles.menutitle}>{seriesData.series6.title}</Text>
                <Text style={styles.datetext}>{seriesData.series6.time}</Text>
                <Text style={styles.menutext}>Speaker: {seriesData.series6.speaker[0]}</Text>
                <Text style={styles.menutext}>Translator: {seriesData.series6.translator[0]}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
            <Image source = {require('./Resources/ic_launcher.png')} style={styles.icon}/>
            <View style={styles.text}>
                <Text style={styles.menutitle}>{seriesData.series7.title}</Text>
                <Text style={styles.datetext}>{seriesData.series7.time}</Text>
                <Text style={styles.menutext}>Speaker: {seriesData.series7.speaker[0]}</Text>
                <Text style={styles.menutext}>Translator: {seriesData.series7.translator[0]}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
            <Image source = {require('./Resources/ic_launcher.png')} style={styles.icon}/>
            <View style={styles.text}>
                <Text style={styles.menutitle}>{seriesData.series8.title}</Text>
                <Text style={styles.datetext}>{seriesData.series8.time}</Text>
                <Text style={styles.menutext}>Speaker: {seriesData.series8.speaker[0]}</Text>
                <Text style={styles.menutext}>Translator: {seriesData.series8.translator[0]}</Text>
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
      color: '#c69f1b',
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