'use strict';

import React, { Component } from 'react';
import { ScrollView, View, Form } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { ContainerOuter, ContainerInner, ContainerText, ContainerButton, Button, ButtonText, Box1, Box2, Title } from './styles.js';


import email from 'react-native-email';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  email: t.String,
  phone: t.maybe(t.String),
  message: t.String,
});

//var barheight = Dimensions.get('window').height * 0.07;

export default class ContactUs extends Component<{}> {
  static navigationOptions = {
      title: 'Contact Us',
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

  // Sends message as an email to some address
  // NEED AN EMAIL SERVER BUT FOR NOW IT JUST REDIRECTS TO AN EMAIL APP
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    var temp = "Message from ";
    const title = temp.concat(value.name);
    const to = ['billsunswag@gmail.com']; 
    email(to, {
        subject: title,
        body: value.message,
    }).catch(console.error)
  }

  render() {
    return (
      <ScrollView onLayout={this.onLayout.bind(this)}>
        <ContainerOuter>
          <Form type={User} ref={c => this._form = c}/>

          <ContainerButton>
            <Button onPress={() => this.handleSubmit()}>
              <ButtonText>Submit</ButtonText>
            </Button>
          </ContainerButton>
          <View style = {{alignItems: 'center'}}>
              <ContactInfo>107 Timberbank Blvd, Scarbrough, ON M1W 1Z8</ContactInfo>
              <ContactInfo>1-647-859-0888</ContactInfo>
              <ContactInfo>patrickyan@christgc.org</ContactInfo>
          </View>
        </ContainerOuter>
      </ScrollView>
    );
  }
}


/* 
          <ContainerInner>
              <ContainerText><Title}>Name</Title></ContainerText>
              <Box1
                  underlineColorAndroid = 'transparent'
                  onChangeText = {(text) => this.setState({text})}
              />
          </ContainerInner>
          <ContainerInner>
              <ContainerText><Title>Email</Title></ContainerText>
              <Box1
                  underlineColorAndroid = 'transparent'
                  onChangeText = {(text) => this.setState({text})}
              />
          </ContainerInner>
          <ContainerInner>
              <ContainerText><Title>Phone</Title></ContainerText>
              <Box1
                  underlineColorAndroid = 'transparent'
                  onChangeText = {(text) => this.setState({text})}
              />
          </ContainerInner>
          <Box2
              multiline = {true}
              numberOfLines = {20}
              placeholder = "Your message here"
              onChangeText = {(text) => this.setState({text})}
          />
*/