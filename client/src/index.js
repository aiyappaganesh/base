import React from 'react'
import createHistory from 'history/createBrowserHistory'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import configureStore from 'store'
import { syncHistoryWithStore } from 'react-router-redux'

import Root from 'containers/Root'

const store = configureStore()

const browserHistory = createHistory()

const history = syncHistoryWithStore(browserHistory, store)

render(
  <AppContainer>
    <Root
      store={store}
      history={history}
    />
  </AppContainer>,
  document.getElementById('app')
)
