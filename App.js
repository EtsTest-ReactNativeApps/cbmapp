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

import Splash_Screen from './views/main/Splash_Screen';
import MainPage from './views/main/MainPage';
import MenuPage from './views/main/MenuPage';
import WebPage from './views/main/WebView';
import AboutPage from './views/main/About';
import AnnouncementPage from './views/announcements/Announcements';
import ContactUs from './views/main/ContactPage';
import SettingsPage from './views/settings/Settings';
import SpeakerMain from './views/speakers/Speaker_main';
import gen_speaker_page from './views/speakers/Speaker_individual';
import SpeakerJH from './views/speakers/SpeakerJH';
import SpeakerMD from './views/speakers/SpeakerMD';
import SpeakerJT from './views/speakers/SpeakerJT';
import SpeakerPW from './views/speakers/SpeakerPW';
import SpeakerLP from './views/speakers/SpeakerLP';
import SeriesMenu from './views/series/Series_main';
import Series_1 from './views/series/Series1';
import gen_sermon_page from './views/series/Sermon_individual';
import manage_downloads from './views/series/Downloads';


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
