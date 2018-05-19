/**
 * Actions
 */
import {
  HANDLE_FIELD_VALUE,
  HANDLE_SUBMIT_TASK,
  DELETE_TASK,
  DELETE_TASKS,
  TOGGLE_TASK_STATE
} from './types';

/**
 * Form
 */
export const handleFieldValue = newValue => {
  return { type: HANDLE_FIELD_VALUE, payload: newValue };
};

/**
 *
 * Tasks
 */
export const handleSubmitTask = newTask => {
  return { type: HANDLE_SUBMIT_TASK, payload: newTask };
};

export const deleteTask = index => {
  return { type: DELETE_TASK, payload: index };
};

export const deleteTasks = () => {
  return { type: DELETE_TASKS };
};

export const toggleTaskState = index => {
  return { type: TOGGLE_TASK_STATE, payload: index };
};
