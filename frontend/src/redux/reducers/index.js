import { combineReducers } from 'redux'
import authReducer from './authReducer';
import errorReducer from './errorReducer'
import imageReducer from './imageReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    error: errorReducer,
    image: imageReducer
});