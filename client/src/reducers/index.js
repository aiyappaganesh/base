import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import * as asyncInitialState from 'redux-async-initial-state'

const reducers = {
  routing: routerReducer,
  form: formReducer,
}

const appReducer = asyncInitialState.outerReducer(combineReducers({
  ...reducers,
  asyncInitialState: asyncInitialState.innerReducer,
}))

const reducer = (state, action) => {
  let locState = state
  return appReducer(locState, action)
}

console.log('module', module)

export default reducer
