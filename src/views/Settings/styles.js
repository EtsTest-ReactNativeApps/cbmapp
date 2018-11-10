import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'


const ContainerOuter = styled(View)`
    marginTop: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 10%,
`;

const ContainerInnerLeft = styled(View)`
    width: 70%,
    justifyContent: 'center',
`;

const ContainerInnerRight = styled(View)`
    width: 30%,
    justifyContent: 'center',
`;

const Text1 = styled(Text)`
	fontSize: 20;
	fontWeight: 'bold';
	marginLeft: 20;
`;

const Text2 = styled(Text)`
    fontSize: 20;
`;


//var wdt = Dimensions.get('window').width * 0.8;
//var hei = Dimensions.get('window').width * 0.3833 * 0.8;
//var sides = Dimensions.get('window').width * 0.05;
//var topbot = Dimensions.get('window').height * 0.1;

//var a = Dimensions.get('window').height * 0.17;
//var b = Dimensions.get('window').width * 0.30;
//var c = Dimensions.get('window').width * 0.70;
