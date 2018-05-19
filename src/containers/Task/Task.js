/**
 * Packages
 */
import React from 'react';
import Ionicon from 'react-ionicons';
import { connect } from 'react-redux';

/**
 * Actions
 */
import * as actions from '../../actions';

/**
 * Styles
 */
import './Task.css';

const Task = ({
  taskValue,
  taskId,
  deleteTask,
  index,
  isCompleted,
  toggleTaskState
}) => {
  return (
    <div className="task-wrapper">
      <div onClick={() => toggleTaskState(index)} className="completed-button">
        {isCompleted && (
          <Ionicon
            className="ionicons"
            icon="ios-checkmark"
            fontSize="30px"
            color="green"
          />
        )}
      </div>
      <div className={isCompleted ? 'task task-done' : 'task'}>{taskValue}</div>
      <Ionicon
        onClick={() => deleteTask(index)}
        className="ionicons delete"
        icon="ios-close"
        fontSize="30px"
        color="red"
      />
    </div>
  );
};

export default connect(null, actions)(Task);
