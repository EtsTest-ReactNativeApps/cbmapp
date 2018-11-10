'use strict';

import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Container, ContainerInner, Image, Image1, Desc, Title, ContactInfo } from './styles.js';


export default class AboutDescription extends Component<{}> {
  static navigationOptions = {
      title: 'About Us',
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
          <ContainerInner}>
            <Image source = {require('resources/China-Bridge-Logo.png')}/>
          </ContainerInner>
          <Title>Ministry Introduction</Title>
          <Desc>The Gospel China Bridge ministry is mainly for Chinese Christians. We hold 4-6 conferences each year. he purpose of our ministry is to provide biblical Christian teaching to our brothers and sisters.</Desc>
          <Desc>The lecturers of “Gospel China Bridge” are mostly from the English-speaking world. They are conservative, loyal to the Word of God, and have a burden for teaching Chinese Christians. </Desc>
          <Desc>Our common vision is to help the Chinese churches return to the orthodox beliefs revealed in the Bible, to pass on the ancient gospel recognized by saints in history, to resist the impact of teachings incompatible with the Bible in the modern church, to help the people of God stand firm in the faith. </Desc>
          <Desc>We currently provide free videos and audio recordings of the China Bridge conferences. Our speakers allow the sharing of their sermons in local churches.</Desc>
          <Image1 source = {require('resources/1.png')}/>
          <View style = {{alignItems: 'center'}}>
              <ContactInfo>107 Timberbank Blvd, Scarbrough, ON M1W 1Z8</ContactInfo>
              <ContactInfo>1-647-859-0888</ContactInfo>
              <ContactInfo>patrickyan@christgc.org</ContactInfo>
          </View>
        </Container>
      </ScrollView>
    );
  }
}



