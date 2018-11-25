import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import ReactSplashScreen from 'react-native-splash-screen'


export default class SplashScreen extends Component<void, Props, void> {
  static navigationOptions = {
    header: {
      visible: false
    }
  };

  componentDidMount () {
    ReactSplashScreen.hide(),
    this.props.navigation.navigate('Home')
  }
}
