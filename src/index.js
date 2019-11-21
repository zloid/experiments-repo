import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import App from './components/App'

import rootReducer from './reducers'

// const rootReducer = (state = {}, action) => state
const store = createStore(rootReducer, applyMiddleware(logger))

console.log(store.getState().mainReducer.dataForTextareaOne)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
