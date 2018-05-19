/**
 * Actions
 */
import { HANDLE_FIELD_VALUE, HANDLE_SUBMIT_TASK, DELETE_TASK } from './types';

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

export const deleteTask = id => {
  return { type: DELETE_TASK, payload: id };
};
