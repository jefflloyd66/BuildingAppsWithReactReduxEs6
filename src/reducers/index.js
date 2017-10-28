import {combineReducers} from 'redux';
import authors from './authorReducer';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses: courses,
  authors: authors
});

export default rootReducer;
