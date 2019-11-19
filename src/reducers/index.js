import { combineReducers } from 'redux'
import inputOneReducer from './inputOneReducer'
import textareaOneReducer from './textareaOneReducer'

export default combineReducers({
    inputOneReducer,
    textareaOneReducer,
})
