import React from 'react'
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native'
import styled from 'styled-components'


const Container = styled(View)`
    margin: 5%;
`;

const ContainerInner = styled(View)`
    margin: 0;
    backgroundColor: '#245D8C';
    borderRadius: 10%;
`;

const Image = styled(Image)`
    width: 70%;
    height: 0.3833 * 70%;
    marginTop: 10%;
    marginBottom: 10%;
    marginLeft: 10%;
    marginRight: 10%;
`;

const Image1 = styled(Image)`
    marginTop: 1;
    marginBottom: 1;
    justifyContent: 'center';
    width: 25%;
    height: 17%;
`;

const Desc = styled(Text)`
    fontSize: 15;
    marginTop: 8;
    marginBottom: 8;
`;

const Title = styled(Text)`
    fontSize: 20;
    marginTop: 20;
    marginBottom: 8;
    fontWeight: 'bold';
`;

const ContactInfo = styled(Text)`
    fontSize: 14;
    marginTop: 5;
    marginBottom: 5;
`;


//var mgn = Dimensions.get('window').width * 0.05;
//var wdt = Dimensions.get('window').width * 0.7;
//var hei = Dimensions.get('window').width * 0.3833 * 0.7;
//var sides = Dimensions.get('window').width * 0.1;
//var topbot = Dimensions.get('window').height * 0.1;