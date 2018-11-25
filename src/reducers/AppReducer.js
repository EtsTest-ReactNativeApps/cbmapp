// import {
//     combineReducers,
//     createStore,
//     applyMiddleware,
//     compose
// } from 'redux'
import { combineReducers } from 'redux'
import { NavigationActions, StackActions } from 'react-navigation'

import StackNavigator from '../navigation/StackNavigator'

// const resetAction = StackActions.reset({
//     index: 0,
//     actions: [NavigationActions.navigate({ routeName: 'Home' })],
// });
// const initialNavState=StackNavigator.router.getStateForAction(resetAction)

const initialNavState = {
    index: 0,
    routes: [
        { key: 'Home', routeName: 'Home' },
    ],
}

// const AppReducer = (state=initialNavState, action) => {
//   const newState = StackNavigator.router.getStateForAction(action, state)
//   return newState || state
// }

const AppReducer = combineReducers({
  nav: (state=initialNavState, action) => {
    const newState = StackNavigator.router.getStateForAction(action, state)
    return newState || state
  }
})

export default AppReducer
