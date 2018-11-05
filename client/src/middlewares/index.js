import { applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()

export default applyMiddleware(
  routerMiddleware(browserHistory),
  sagaMiddleware
)
