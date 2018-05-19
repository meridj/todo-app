/**
 * Actions
 */
import { HANDLE_FIELD_VALUE } from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case HANDLE_FIELD_VALUE:
      return action.payload;
    default:
      return state;
  }
};
