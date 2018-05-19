/**
 * Packages
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';

/**
 * Styles
 */
import './TasksList.css';

/**
 * Containers
 */
import { Task } from '../';

class TasksList extends Component {
  render() {
    const { tasks } = this.props;

    return tasks.length ? (
      <div className="taskslist">
        {tasks.map((elem, key) => (
          <Task
            key={key}
            index={key}
            isCompleted={elem.done}
            taskValue={elem.taskValue}
          />
        ))}
      </div>
    ) : null;
  }
}

function mapStateToProps({ tasks }) {
  return { tasks };
}

export default connect(mapStateToProps, null)(TasksList);
