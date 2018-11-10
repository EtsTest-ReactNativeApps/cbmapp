// import {
//     combineReducers,
//     createStore,
//     applyMiddleware,
//     compose
// } from 'redux'

import StackNavigator from '../navigation/StackNavigator'

const AppReducer = (state, action) => {
  const newState = StackNavigator.router.getStateForAction(action, state)
  return newState || state
}

// const AppReducer = combineReducers({
//   nav,
// })

export default AppReducer
