'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  ActivityIndicator,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  NavigationActions,
} from 'react-navigation';
import {CheckBox} from 'react-native-elements';

import * as seriesData from './series.json';

import deleteIcon from '../../resources/Delete.png'
import * as settingsData from '../Settings/settings.json';
var font_size = settingsData.fontsize;
var barheight = Dimensions.get('window').height * 0.07;
var wdt = Dimensions.get('window').width * 0.9;
var hei = Dimensions.get('window').width * 0.7 * 0.9;
var mgn = Dimensions.get('window').width * 0.05;
var w = wdt*0.85;


function remove_downloads() {
  Alert.alert(
    'Confirmation',
    'Are you sure you want to remove these downloads?',
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'Delete', onPress: () => console.log('OK Pressed'), style: 'destructive'},
    ],
    { cancelable: false }
  )
};

/*
function delete() {

};
*/

export default class manage_downloads extends Component<{}> {
  static navigationOptions = {
      title: 'Manage Downloads',
      headerRight: (
          <TouchableOpacity onPress={() => remove_downloads()}> // Doesn't work yet
            <Image source={deleteIcon} style={{width: barheight*0.7, height: barheight*0.7, marginRight: 10}}/>
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

  constructor(props) {
      super(props);
      this.state = {checked: false};
  };

  onLayout(e) {
      const {width, height} = Dimensions.get('window')
      console.log(width, height)
  };

  render() {
    return (
      <ScrollView onLayout={this.onLayout.bind(this)}>

          <View style = {{height: 20}}></View>

          <View style = {styles.series}>
              <View style = {{width: w}}>
                  <Text style = {styles.menutitle}>{seriesData.series1.title}</Text>
                  <Text style = {styles.datetext}>{seriesData.series1.time}</Text>
              </View>
              <CheckBox
                  title=''
                  checked={this.state.checked}
                  onPress={() => this.setState({ checked: !this.state.checked })}
              />
          </View>
          <View style = {styles.series}>
              <View style = {{width: w}}>
                  <Text style = {styles.menutitle}>{seriesData.series2.title}</Text>
                  <Text style = {styles.datetext}>{seriesData.series2.time}</Text>
              </View>
              <CheckBox
                  title=''
                  checked={this.state.checked}
                  onPress={() => this.setState({ checked: !this.state.checked })}
              />
          </View>
          <View style = {styles.series}>
              <View style = {{width: w}}>
                  <Text style = {styles.menutitle}>{seriesData.series3.title}</Text>
                  <Text style = {styles.datetext}>{seriesData.series3.time}</Text>
              </View>
              <CheckBox
                  title=''
                  checked={this.state.checked}
                  onPress={() => this.setState({ checked: !this.state.checked })}
              />
          </View>
          <View style = {styles.series}>
              <View style = {{width: w}}>
                  <Text style = {styles.menutitle}>{seriesData.series4.title}</Text>
                  <Text style = {styles.datetext}>{seriesData.series4.time}</Text>
              </View>
              <CheckBox
                  title=''
                  checked={this.state.checked}
                  onPress={() => this.setState({ checked: !this.state.checked })}
              />
          </View>
          <View style = {styles.series}>
              <View style = {{width: w}}>
                  <Text style = {styles.menutitle}>{seriesData.series5.title}</Text>
                  <Text style = {styles.datetext}>{seriesData.series5.time}</Text>
              </View>
              <CheckBox
                  title=''
                  checked={this.state.checked}
                  onPress={() => this.setState({ checked: !this.state.checked })}
              />
          </View>
          <View style = {styles.series}>
              <View style = {{width: w}}>
                  <Text style = {styles.menutitle}>{seriesData.series6.title}</Text>
                  <Text style = {styles.datetext}>{seriesData.series6.time}</Text>
              </View>
              <CheckBox
                  title=''
                  checked={this.state.checked}
                  onPress={() => this.setState({ checked: !this.state.checked })}
              />
          </View>
          <View style = {styles.series}>
              <View style = {{width: w}}>
                  <Text style = {styles.menutitle}>{seriesData.series7.title}</Text>
                  <Text style = {styles.datetext}>{seriesData.series7.time}</Text>
              </View>
              <CheckBox
                  title=''
                  checked={this.state.checked}
                  onPress={() => this.setState({ checked: !this.state.checked })}
              />
          </View>
          <View style = {styles.series}>
              <View style = {{width: w}}>
                  <Text style = {styles.menutitle}>{seriesData.series8.title}</Text>
                  <Text style = {styles.datetext}>{seriesData.series8.time}</Text>
              </View>
              <CheckBox
                  title=''
                  checked={this.state.checked}
                  onPress={() => this.setState({ checked: !this.state.checked })}
              />
          </View>

      </ScrollView>
    );
  }
}

var sides = Dimensions.get('window').width * 0.05;
var topbot = Dimensions.get('window').height * 0.02;
var h = Dimensions.get('window').height * 0.10;

const styles = StyleSheet.create({
  series: {
      marginBottom: 2,
      paddingLeft: sides,
      height: h,
      flexDirection: 'row',
      backgroundColor: '#ffffff',
      alignItems: 'center',
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
});
