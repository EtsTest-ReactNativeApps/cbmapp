'use strict';

import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { CalendarDate, CalendarDateText, CalendarDateText1, CalendarEvent, Container, Text1, Text2, Text3 } from './styles.js';


//var barheight = Dimensions.get('window').height * 0.07;

export default class AnnouncementPage extends Component<{}> {
  static navigationOptions = {   
      title: 'Announcements',
      headerStyle: {
          backgroundColor: '#F3F3F3',
          height: 7%,
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
                <Text1>God's Purpose for Creating Man</Text1>
                <Text2>Speaker: Paul Washer</Text2>
                <Text3>Translator: Larry Pan</Text3>
              </CalendarEvent>
          </Container>
          <Container>
              <CalendarDate>
                <CalendarDateText> SEPT </CalendarDateText>
                <CalendarDateText1}>07-09</CalendarDateText1>
              </CalendarDate>
              <CalendarEvent>
                <Text1>Looking to Ancient Roads</Text1>
                <Text2>Speaker: Paul Washer</Text2>
                <Text3>Translator: Larry Pan</Text3>
              </CalendarEvent>
          </Container>
          <Container>
              <CalendarDate>
                <CalendarDateText> NOV </CalendarDateText>
                <CalendarDateText1>09-11</CalendarDateText1>
              </CalendarDate>
              <CalendarEvent>
                <Text1>The Narrow Gate</Text1>
                <Text2>Speaker: Paul Washer</Text2>
                <Text3>Translator: Larry Pan</Text3>
              </CalendarEvent>
          </Container>
      </ScrollView>
    );
  }
}


