import { combineReducers } from 'redux';
import postList from './postList';
import filter from './filter';

export default combineReducers({
    postList,
    filter
  })