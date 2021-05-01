import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import state from './state';
import rootReducer from './src/redux/reducer/index';

const store = createStore(rootReducer, state, applyMiddleware(thunk));

export default store;
