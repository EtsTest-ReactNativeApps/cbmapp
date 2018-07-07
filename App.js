import React from 'react'
import styled from 'styled-components'
import { Text, View } from 'react-native'

const StyledView = styled(View)`
    align-items: center;
    background-color: #245d8c;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: center;
    width: 100%;
`

const StyledText = styled(Text)`
    color: #ffffff;
    font-size: 18px;
`

export default class App extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledText>Welcome to the China Bridge App!</StyledText>
      </StyledView>
    )
  }
}
