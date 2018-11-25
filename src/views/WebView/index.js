import React from 'react'
import {
    Button,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    WebView as ReactWebView
} from 'react-native'
import { NavigationActions } from 'react-navigation'


var barheight = Dimensions.get('window').height * 0.07

export default class WebView extends React.Component {
  static navigationOptions = {
      title: 'Web',
      headerStyle: {
          backgroundColor: '#F3F3F3',
          height: barheight,
      },
      headerTintColor: 'black',
      headerTitleStyle: {
          fontWeight: 'bold',
      },
  }

  render() {
      return (
          <ReactWebView
            source={{uri: 'https://www.gospelchinabridge.org/en/'}}
            style={{marginTop: 0}}
          />
      )
  }

}

var Width = Dimensions.get('window').width * 0.25
var Height = Dimensions.get('window').width * 0.10

const styles = StyleSheet.create({
  button: {
    width: Width,
    height: Height,
    marginTop: 50,
    backgroundColor: '#E6E6E6',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text3: {
    fontSize: 15,
    color: '#000000',
    fontWeight: 'bold',
  }
})
