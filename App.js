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

import Splash_Screen from './Splash_Screen';
import MainPage from './MainPage';
import MenuPage from './MenuPage';
import WebPage from './WebView';
import AboutPage from './About';
import AnnouncementPage from './Announcements';
import ContactUs from './ContactPage';
import SettingsPage from './Settings';
import SpeakerMain from './Speaker_main';
import gen_speaker_page from './Speaker_individual';
import SpeakerJH from './SpeakerJH';
import SpeakerMD from './SpeakerMD';
import SpeakerJT from './SpeakerJT';
import SpeakerPW from './SpeakerPW';
import SpeakerLP from './SpeakerLP';
import SeriesMenu from './Series_main';
import Series_1 from './Series1';
import gen_sermon_page from './Sermon_individual';
import manage_downloads from './Downloads';


const App = createStackNavigator(
    {
        InitScreen: { screen: Splash_Screen },
        Home: { screen: MainPage },
        Menu: { screen: MenuPage },
        Web: { screen: WebPage },
        About: { screen: AboutPage },
        Announcements: { screen: AnnouncementPage },
        Contact: { screen: ContactUs },
        Settings: { screen: SettingsPage },
        Speakers: { screen: SpeakerMain },
        SpeakerPage: { screen: gen_speaker_page },
        Speaker1: { screen: SpeakerJH },
        Speaker2: { screen: SpeakerMD },
        Speaker3: { screen: SpeakerJT },
        Speaker4: { screen: SpeakerPW },
        Speaker5: { screen: SpeakerLP },
        SeriesHome: { screen: SeriesMenu },
        Series1: { screen: Series_1 },
        Sermon: { screen: gen_sermon_page },
        Downloads: { screen: manage_downloads },
    }, {
        initialRouteName: "Home" 
    }
);
export default App;
