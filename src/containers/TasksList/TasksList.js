/**
 * Packages
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    return (
      <div className="taskslist">
        {tasks.map((elem, key) => (
          <Task
            key={key}
            index={key}
            taskId={elem.id}
            taskValue={elem.taskValue}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ tasks }) {
  return { tasks };
}

export default connect(mapStateToProps, null)(TasksList);
