import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';

import { rootReducer } from './reducers/';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk, logger),
    // other store enhancers if any
);


const persistConfig = {
    key: 'authType',
    storage,
    whitelist: ['auth'] // which reducer want to store
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, enhancer);
const persistor = persistStore(store);
export { persistor, store };