import addMovieReducer from './addMovieReducer.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    addMovieReducer
})

export default rootReducer;