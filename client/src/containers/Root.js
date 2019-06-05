import React from 'react'
import PropTypes from 'prop-types'
import {
  Router,
  Route,
  IndexRoute,
} from 'react-router'
import { Provider } from 'react-redux'
import App from 'containers/App'
import routes from 'src/routes'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route exact path="/" component={App}>
        {
          routes.map(route => {
            if (route.onEnter) {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  onEnter={route.onEnter(store)}
                />
              )
            }
            return (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              />
            )
          })
        }
      </Route>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default Root
