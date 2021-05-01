import {combineReducers} from 'redux';
import categoriesList from './categoryReducer';
import switchLanguage from './languageReducer';

const rootReducer = combineReducers({categoriesList, switchLanguage});
export default rootReducer;
