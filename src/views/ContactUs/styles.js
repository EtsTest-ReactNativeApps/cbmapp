import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import styled from 'styled-components'


const ContainerOuter = styled(View)`
    padding: 5%;
    backgroundColor: '#ffffff';
`;

const ContainerInner = styled(View)`
    flexDirection: 'row';
    marginTop: 5%;
    width: 90%;
    height: 30;
`;

const ContainerText = styled(View)`
    width: 0.23*90%;
    //fontSize: 18;
`;

const ContainerButton = styled(View)`
    flex: 1;
    justifyContent: 'center';
    alignItems: 'center';
    height: 20%;
    width: 90%;
    marginBottom: 20;
`;

const Button = styled(TouchableOpacity)`
    backgroundColor: '#245D8C';
    justifyContent: 'center';
    alignItems: 'center';
    height: %8;
    width: wdt* 0.4;
    borderRadius: 5;
`;

const ButtonText = styled(Text)`
    color:'#FFFFFF';
    fontSize: 19; 
    fontWeight: 'bold';
`;

const Box1 = styled(TextInput)`
    height: 30;
    width: 0.77*90%;
    borderWidth: 1;
    borderRadius: 3;
    backgroundColor: '#FFFFFF';
    fontSize: 16;
`;

const Box2 = styled(TextInput)`
    height: 45%;
    marginTop: 1.5*5%;
    width: wdt;
    borderWidth: 1;
    borderRadius: 3;
    backgroundColor: '#FFFFFF';
    fontSize: 16;
`;

const Title = styled(Text)`
    fontSize: 20;
    fontWeight: 'bold';
    color: '#245D8C';
`;


//var mgn = Dimensions.get('window').width * 0.05;
//var wdt = Dimensions.get('window').width * 0.9;
//var hei = Dimensions.get('window').width * 0.7 * 0.9;
//var sides = Dimensions.get('window').width * 0.05;