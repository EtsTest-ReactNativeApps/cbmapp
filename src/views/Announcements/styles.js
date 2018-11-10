import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import styled from 'styled-components'


const CalendarDate = styled(View)`
    marginTop: 1;
    marginBottom: 1;
    width: 25%;
    height: 17%;
    justifyContent: 'center';
    alignItems: 'center';
`;

const CalendarDatetext = styled(Text)`
    fontSize: 16;
    marginTop: 1;
    marginBottom: 1;
    paddingTop: 5;
    paddingBottom: 5;
    paddingLeft: 15;
    paddingRight: 15;
    color: '#FFFFFF';
    backgroundColor: '#245D8C';
    borderTopLeftRadius: 10;
    borderTopRightRadius: 10;
    borderBottomLeftRadius: 3;
    borderBottomRightRadius: 3;
`;

const CalendarDateText1 = styled(Text)`
    fontSize: 16;
    marginTop: 1;
    marginBottom: 1;
    paddingTop: 5;
    paddingBottom: 5;
    paddingLeft: 15;
    paddingRight: 15;
    backgroundColor: '#EECA50';
    borderRadius: 3;
`;

const CalendarEvent = styled(View)`
    marginTop: 1;
    marginBottom: 1;
    justifyContent: 'center';
    width: 25%;
    height: 17%;
`;

const Container = styled(TouchableOpacity)`
    marginTop: 5%;
    marginLeft: 5%;
    marginRight: 5%;
    borderRadius: 5%;
    flexDirection: 'row';
    backgroundColor: '#F4EFE0';
`;

const Text1 = styled(Text)`
    fontSize: 16;
    color: '#245D8C';
    fontWeight: 'bold';
`;

const Text2 = styled(Text)`
    fontSize: 13; 
    marginTop: 3;
`;

const Text3 = styled(Text)`
    fontSize: 13; 
`;

//var wdt = Dimensions.get('window').width * 0.8;
//var hei = Dimensions.get('window').width * 0.3833 * 0.8;
//var sides = Dimensions.get('window').width * 0.05;
//var topbot = Dimensions.get('window').height * 0.1;

//var a = Dimensions.get('window').height * 0.17;
//var b = Dimensions.get('window').width * 0.25;
//var c = Dimensions.get('window').width * 0.65;