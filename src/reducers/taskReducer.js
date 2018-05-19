/**
 * Actions
 */
import { HANDLE_SUBMIT_TASK, DELETE_TASK } from '../actions/types';

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
    default:
      return state;
  }
};
