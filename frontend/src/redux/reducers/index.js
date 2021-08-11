import { combineReducers } from 'redux'
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import imageReducer from './imageReducer';
import albumReducer from './albumReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    error: errorReducer,
    image: imageReducer,
    album: albumReducer
});