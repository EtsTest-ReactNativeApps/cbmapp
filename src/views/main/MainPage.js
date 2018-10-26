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

export default class MainPage extends Component<{}> {
	static navigationOptions = {
	    title: 'Home',
      headerRight: (
          <TouchableOpacity> // Doesn't work yet
            <Image source = {require('resources/menu.png')} style={{width: barheight*0.7, height: barheight*0.7, marginRight: 10}}/>
          </TouchableOpacity>
      ),
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
  // Swipe left to get to menu
	render() {
		return (
      <ScrollView onLayout={this.onLayout.bind(this)}>
  			<TouchableOpacity style = {styles.container} onPress={() => this.props.navigation.navigate('Menu')}>
  				  <Image source = {require('resources/China-Bridge-Logo.png')} style={styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row'}}>
            <View style={styles.calendardate}>
                <Text style={styles.calendardatetext}>JUNE </Text>
                <Text style={styles.calendardatetext1}>22-23</Text>
            </View>
            <View style={styles.calendarevent}>
                <Text style={{fontSize:16, color:'#245D8C', fontWeight: 'bold'}}>God's Purpose for Creating Man</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: Paul Washer</Text>
                <Text style={{fontSize:13}}>Translator: Larry Pan</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row'}}>
            <View style={styles.calendardate}>
                <Text style={styles.calendardatetext}> SEPT </Text>
                <Text style={styles.calendardatetext1}>07-09</Text>
            </View>
            <View style={styles.calendarevent}>
                <Text style={{fontSize:16, color:'#245D8C', fontWeight: 'bold'}}>Looking to Ancient Roads</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: Paul Washer</Text>
                <Text style={{fontSize:13}}>Translator: Larry Pan</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row'}}>
            <View style={styles.calendardate}>
                <Text style={styles.calendardatetext}> NOV </Text>
                <Text style={styles.calendardatetext1}>09-11</Text>
            </View>
            <View style={styles.calendarevent}>
                <Text style={{fontSize:16, color:'#245D8C', fontWeight: 'bold'}}>The Narrow Gate</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: Paul Washer</Text>
                <Text style={{fontSize:13}}>Translator: Larry Pan</Text>
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

var a = Dimensions.get('window').height * 0.17;
var b = Dimensions.get('window').width * 0.3;
var c = Dimensions.get('window').width * 0.7;

const styles = StyleSheet.create({
  calendardate: {
      marginTop: 1,
      marginBottom: 1,
      width: b,
      height: a,
      backgroundColor: '#F4EFE0',
      justifyContent: 'center',
      alignItems: 'center',
  },
  calendardatetext: {
      fontSize: 17,
      marginTop: 1,
      marginBottom: 1,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 15,
      paddingRight: 15,
      color: '#FFFFFF',
      backgroundColor: '#245D8C',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 3,
      borderBottomRightRadius: 3,
  },
  calendardatetext1: {
      fontSize: 17,
      marginTop: 1,
      marginBottom: 1,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 15,
      paddingRight: 15,
      backgroundColor: '#EECA50',
      borderRadius: 3,
  },
  calendarevent: {
      marginTop: 1,
      marginBottom: 1,
      justifyContent: 'center',
      width: c,
      height: a,
      backgroundColor: '#F4EFE0',
  },
  container: {
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
});
