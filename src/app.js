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
  createStackNavigator,
} from 'react-navigation';

import Splash_Screen from 'Splash_Screen';
import Home from './views/Home/';
import SideMenu from './views/SideMenu/';
import WebView from './views/WebView/';
import AboutDescription from './views/AboutDescription/';
import Announcements from './views/Announcements/';
import ContactUs from './views/ContactUs/';
import Settings from './views/Settings/';
import Speakers from './views/Speakers/';
import gen_speaker_page from './views/Speakers/Speaker_individual';
import SpeakerJH from './views/Speakers/SpeakerJH';
import SpeakerMD from './views/Speakers/SpeakerMD';
import SpeakerJT from './views/Speakers/SpeakerJT';
import SpeakerPW from './views/Speakers/SpeakerPW';
import SpeakerLP from './views/Speakers/SpeakerLP';
import Series from './views/Series/';
import Series_1 from './views/Series/Series1';
import gen_sermon_page from './views/Series/Sermon_individual';
import manage_downloads from './views/Series/Downloads';


// TODO: Is this necessary?
const App = createStackNavigator(
    {
        InitScreen: { screen: Splash_Screen },
        Home: { screen: Home },
        Menu: { screen: SideMenu },
        Web: { screen: WebView },
        About: { screen: AboutDescription },
        Announcements: { screen: Announcements },
        Contact: { screen: ContactUs },
        Settings: { screen: Settings },
        Speakers: { screen: Speakers },
        SpeakerPage: { screen: gen_speaker_page },
        Speaker1: { screen: SpeakerJH },
        Speaker2: { screen: SpeakerMD },
        Speaker3: { screen: SpeakerJT },
        Speaker4: { screen: SpeakerPW },
        Speaker5: { screen: SpeakerLP },
        SeriesHome: { screen: Series },
        Series1: { screen: Series_1 },
        Sermon: { screen: gen_sermon_page },
        Downloads: { screen: manage_downloads },
    }, {
        initialRouteName: "Home"
    }
);
export default App;
