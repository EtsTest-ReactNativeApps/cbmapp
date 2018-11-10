import React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import StackNavigator from './StackNavigator'

// This function makes our app Redux aware
function UnconnectedStateNavigator (props) {
  const { dispatch, nav } = props
  const navigation = addNavigationHelpers({
    dispatch,
    state: nav
  })

  return <StackNavigator navigation={navigation} />
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(UnconnectedStateNavigator)
