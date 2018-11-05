import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux'
import rootReducer from 'reducers'
import middleware, { sagaMiddleware } from 'middlewares'
import thunkMiddleware from 'redux-thunk'
import rootSaga from 'sagas'

const composeArgs = [middleware, 
                    applyMiddleware(thunkMiddleware)]

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...composeArgs)
  )
  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers/index', () => {
      const nextReducer = require('reducers/index')

      store.replaceReducer(nextReducer)
    })
  }

  return store
}
