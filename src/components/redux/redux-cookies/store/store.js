import { createStore } from 'redux';
import cookiesReducer from '../reducers/cookiesReducer';

const store = createStore(cookiesReducer);

export default store;