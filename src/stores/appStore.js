import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers/index'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger()

export default createStore(
  reducer,
  // applyMiddleware() tells createStore() how to handle middleware
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)
