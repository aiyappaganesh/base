import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import customMuiTheme from 'styles/customMuiTheme'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

require('styles/customStyles.css')
require('../styles/App.css')

const muiTheme = getMuiTheme(customMuiTheme)

const styles = {
}

const keywords = [
];

class App extends Component {
  componentDidMount(){
    document.title = "Base"
  }

  getUserFunctions() {
    const { admin, user } = this.props
    if (!admin.loggedIn && !user.loggedIn) {
      return ['admin_login', 'login', 'load_notification']
    } else if (admin.loggedIn) {
      return admin.functions
    } else if (user.loggedIn) {
      return user.functions
    }
    return []
  }

  render() {
    console.log(this.props)
    const { children, navControl, actions, location, user, admin, asyncInitialState } = this.props
    const rightMenuItems = {Marketplace: '/marketplace', Investors: '', Account: '/account'}
    const noAuthRoutes = ['', 'load_password_reset', 'investors', 'getstarted', 'signup', 'leaderboard']
    const allowedRoutes = noAuthRoutes
    let toRender = (
      <div>
        HELLO WORLD
        {children}
      </div>
    )
    if (user && (user.loggedIn || admin.loggedIn)) {
      let logoutMethod = actions._attemptUserLogout
      if (admin.loggedIn) {
        logoutMethod = actions._attemptAdminLogout
      }
      let appBarLeftIcon = null
      if (navControl.drawerOpen) {
        appBarLeftIcon = (
          <IconButton 
            onClick={actions._toggleDrawer}
          >
            <NavigationClose />
          </IconButton>
        )
      }
      let appBar = null
      appBar = (
        <AppBar
          iconElementLeft={appBarLeftIcon}
          onLeftIconButtonTouchTap={actions._toggleDrawer}
          titleStyle={{
            textAlign: 'center',
          }}
          style={{zIndex: 1400, boxShadow: 'none', position: 'fixed', top: 0, padding: '0 48px'}}
        />
      )
      toRender = (
        <div>
          {appBar}
          <div style={{marginTop: '64px'}}>
            {children}
          </div>
        </div>
      )
    }
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        {toRender}
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  navControl: PropTypes.object.isRequired,
  admin: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  asyncInitialState: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  const props = { 
    navControl: state.navControl,
    admin: state.admin,
    user: state.user,
    asyncInitialState: state.asyncInitialState,
  }
  return props
}

function mapDispatchToProps(dispatch) {
  const actions = {
    _push: push,
  }
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
