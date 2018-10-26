import React from 'react'
import { View, TouchableOpacity, Dimensions } from 'react-native'
import styled from 'styled-components'


const CalendarDate = styled(View)`
    marginTop: 1;
    marginBottom: 1;
    width: b;
    height: a;
    justifyContent: 'center';
    alignItems: 'center';
`;

const CalendarDatetext = styled(View)`
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

const CalendarDateText1 = styled(View)`
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
    marginTop: 1,
    marginBottom: 1,
    justifyContent: 'center',
    width: c,
    height: a,
`;

const Container = styled(TouchableOpacity)`
    marginTop: sides,
    marginLeft: sides,
    marginRight: sides,
    borderRadius: sides,
    flexDirection: 'row',
    backgroundColor: '#F4EFE0',
`;

const Header = styled(View)`
    height: hei,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 0,
    backgroundColor: '#F3F3F3',
`;

const HeaderText = styled(View)`
    color: 'black',
    fontWeight: 'bold',
`;


var wdt = Dimensions.get('window').width * 0.8;
var hei = Dimensions.get('window').width * 0.3833 * 0.8;
var sides = Dimensions.get('window').width * 0.05;
var topbot = Dimensions.get('window').height * 0.1;

var a = Dimensions.get('window').height * 0.17;
var b = Dimensions.get('window').width * 0.25;
var c = Dimensions.get('window').width * 0.65;