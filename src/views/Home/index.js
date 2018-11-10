'use strict';

import React, { Component } from 'react';
import { ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { CalendarDate, CalendarDateText, CalendarDateText1, CalendarEvent, 
         Container, Container1, Image, HeaderImage, Text1, Text2, Text3 } from './styles.js';


//var barheight = Dimensions.get('window').height * 0.07;

export default class Home extends Component<{}> {
	static navigationOptions = {
	    title: 'Home',
      headerRight: (
          <TouchableOpacity> // Doesn't work yet
            <HeaderImage source = {require('resources/menu.png')}/>
          </TouchableOpacity>
      ),
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
  // Swipe left to get to menu
	render() {
		return (
      <ScrollView onLayout={this.onLayout.bind(this)}>
  			<Container onPress={() => this.props.navigation.navigate('Menu')}>
  				  <Image source = {require('resources/China-Bridge-Logo.png')}/>
        </Container>
        <Container1>
            <CalendarDate>
                <CalendarDateText>JUNE </CalendarDateText>
                <CalendarDateText1>22-23</CalendarDateText1>
            </CalendarDate>
            <CalendarEvent>
                <Text1>God's Purpose for Creating Man</Text1>
                <Text2>Speaker: Paul Washer</Text2>
                <Text3>Translator: Larry Pan</Text3>
            </CalendarEvent>
        </Container1>
        <Container1>
            <CalendarDate>
                <CalendarDateText> SEPT </CalendarDateText>
                <CalendarDateText1>07-09</CalendarDateText1>
            </CalendarDate>
            <CalendarEvent>
                <Text1>Looking to Ancient Roads</Text1>
                <Text2>Speaker: Paul Washer</Text2>
                <Text3>Translator: Larry Pan</Text3>
            </CalendarEvent>
        </Container1>
        <Container1>
            <CalendarDate>
                <CalendarDateText> NOV </CalendarDateText>
                <CalendarDateText1>09-11</CalendarDateText1>
            </CalendarDate>
            <CalendarEvent>
                <Text1>The Narrow Gate</Text1>
                <Text2>Speaker: Paul Washer</Text2>
                <Text3>Translator: Larry Pan</Text3>
            </CalendarEvent>
        </Container1>
      </ScrollView>
	  );
	}
}
