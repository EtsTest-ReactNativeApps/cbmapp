import React from 'react'
import styled from 'styled-components'
import { Text, View } from 'react-native'

const StyledText = styled(Text)`
    background-color: pink;
    color: grey;
    font-size: 14px;
`
export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Hi Max, can you see this?</Text>
      </View>
    )
  }
}
