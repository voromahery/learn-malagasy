import {combineReducers} from 'redux';
import dataReducer from './dataReducer';
import switchLanguage from './languageReducer';

const rootReducer = combineReducers({dataReducer, switchLanguage});
export default rootReducer;
