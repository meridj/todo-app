/**
 * Actions
 */
import {
  HANDLE_SUBMIT_TASK,
  DELETE_TASK,
  TOGGLE_TASK_STATE
} from '../actions/types';

export default (state = [], action) => {
  let newTasks = [];

  switch (action.type) {
    case HANDLE_SUBMIT_TASK:
      newTasks = [action.payload, ...state];
      return newTasks;
    case DELETE_TASK:
      newTasks = [...state];
      newTasks.splice(action.payload, 1);
      return newTasks;
    case TOGGLE_TASK_STATE:
      newTasks = [...state];
      newTasks[action.payload].done = !newTasks[action.payload].done;
      return newTasks;
    default:
      return state;
  }
};
