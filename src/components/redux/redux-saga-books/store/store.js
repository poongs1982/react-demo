//import { applyMiddleware, createStore } from 'redux';

import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import bookSaga from '../saga/bookSaga';
import bookReducer from '../reducers/bookReducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: bookReducer,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(bookSaga);

export default store;