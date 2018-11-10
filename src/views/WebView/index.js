import React from 'react';
import { WebView } from 'react-native';
import { NavigationActions } from 'react-navigation';


//var barheight = Dimensions.get('window').height * 0.07;

export default class WebView extends React.Component {
  static navigationOptions = {
      title: 'Web',
      headerStyle: {
          backgroundColor: '#F3F3F3',
          height: 7%,
      },
      headerTintColor: 'black',
      headerTitleStyle: {
          fontWeight: 'bold',
      },
  };

  render() {
      return (
          <WebView
            source={{uri: 'https://www.gospelchinabridge.org/en/'}}
            style={{marginTop: 0}}
          />
      );
  };

}


