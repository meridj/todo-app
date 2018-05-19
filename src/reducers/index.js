/**
 * Packages
 */
import { combineReducers } from 'redux';

/**
 * Reducers
 */
import formReducer from './formReducer';
import taskReducer from './taskReducer';

export default combineReducers({
  fieldValue: formReducer,
  tasks: taskReducer
});
