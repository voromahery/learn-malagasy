import {createStore} from 'redux';
import state from './state';
import rootReducer from './src/reducer/index';

const store = createStore(rootReducer, state);

export default store;
