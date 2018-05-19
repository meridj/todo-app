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

const Task = ({ taskValue, taskId, deleteTask, index }) => {
  console.log(index);
  return (
    <div className="task-wrapper">
      <div>badg</div>
      <div className="task">{taskValue}</div>
      <Ionicon
        onClick={() => deleteTask(index)}
        className="close"
        icon="ios-close"
        fontSize="30px"
        color="black"
      />
    </div>
  );
};

export default connect(null, actions)(Task);
