'use strict';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Splash_Screen from './Splash_Screen';
import MainPage from './MainPage';
import MenuPage from './MenuPage';
import AboutPage from './About';
import AnnouncementPage from './Announcements';
import ContactUs from './ContactPage';
import SpeakerMain from './SpeakerMain';
import SpeakerJH from './SpeakerJH';
import SpeakerMD from './SpeakerMD';
import SpeakerJT from './SpeakerJT';
import SpeakerPW from './SpeakerPW';
import SpeakerLP from './SpeakerLP';
import SeriesMenu from './SeriesMain';
import Series_1 from './Series1';


const App = StackNavigator(
    {
        InitScreen: { screen: Splash_Screen },
        Home: { screen: MainPage },
        Menu: { screen: MenuPage },
        About: { screen: AboutPage },
        Announcements: { screen: AnnouncementPage },
        Contact: { screen: ContactUs },
        Speakers: { screen: SpeakerMain },
        Speaker1: { screen: SpeakerJH },
        Speaker2: { screen: SpeakerMD },
        Speaker3: { screen: SpeakerJT },
        Speaker4: { screen: SpeakerPW },
        Speaker5: { screen: SpeakerLP },
        SeriesHome: { screen: SeriesMain },
        Series1: { screen: Series_1 },
    }, {
        initialRouteName: "Menu" 
    }
);
export default App;
