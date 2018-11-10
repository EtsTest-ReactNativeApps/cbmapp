/*
    App wrapper that sets up the navigation and redux state
*/

import React from 'react'
import {
  StatusBar,
  View,
  Platform,
} from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import styled from 'styled-components'

import AppReducer from './src/reducers/AppReducer'
import StateNavigator from './src/navigation/StateNavigator'

// Where the app state is stored
const store = createStore(AppReducer)

const StyledView = styled(View)`flex: 1`

const ChinaBridgeApp = () => (
    <Provider store={store}>
        <StyledView>
            <StatusBar
                translucent
                backgroundColor='rgba(0, 0, 0, 0.20)'
                animated
            />
            <StateNavigator />
        </StyledView>
    </Provider>
)

export default ChinaBridgeApp
