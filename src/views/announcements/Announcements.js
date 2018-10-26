'use strict';

import React, { Component } from 'react';
import {
  Dimensions,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';
import { 
  NavigationActions,
} from 'react-navigation';

import { CalendarDate, CalendarDateText, CalendarDateText1, CalendarEvent, Container, Header, HeaderText } from './announcements.styles.js';


var barheight = Dimensions.get('window').height * 0.07;


export default class AnnouncementPage extends Component<{}> {
  static navigationOptions = {   
      title: 'Announcements',
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
  render() {
    return (
      <ScrollView onLayout={this.onLayout.bind(this)}>
          <Container>
              <CalendarDate>
                <CalendarDateText>JUNE </CalendarDateText>
                <CalendarDateText1}>22-23</CalendarDateText1>
              </CalendarDate>
              <CalendarEvent>
                <Text style={{fontSize:16, color:'#245D8C', fontWeight:'bold'}}>God's Purpose for Creating Man</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: Paul Washer</Text>
                <Text style={{fontSize:13}}>Translator: Larry Pan</Text>
              </CalendarEvent>
          </Container>
          <Container>
              <CalendarDate>
                <CalendarDateText> SEPT </CalendarDateText>
                <CalendarDateText1}>07-09</CalendarDateText1>
              </CalendarDate>
              <CalendarEvent>
                <Text style={{fontSize:16, color:'#245D8C', fontWeight:'bold'}}>Looking to Ancient Roads</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: Paul Washer</Text>
                <Text style={{fontSize:13}}>Translator: Larry Pan</Text>
              </CalendarEvent>
          </Container>
          <Container>
              <CalendarDate>
                <CalendarDateText> NOV </CalendarDateText>
                <CalendarDateText1>09-11</CalendarDateText1>
              </CalendarDate>
              <CalendarEvent>
                <Text style={{fontSize:16, color:'#245D8C', fontWeight:'bold'}}>The Narrow Gate</Text>
                <Text style={{fontSize:13, marginTop:3}}>Speaker: Paul Washer</Text>
                <Text style={{fontSize:13}}>Translator: Larry Pan</Text>
              </CalendarEvent>
          </Container>
      </ScrollView>
    );
  }
}


