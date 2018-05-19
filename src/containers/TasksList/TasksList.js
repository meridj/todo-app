/**
 * Packages
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'reactstrap';

/**
 * Styles
 */
import './TasksList.css';

/**
 * Actions
 */
import * as actions from '../../actions';

/**
 * Containers
 */
import { Task } from '../';

class TasksList extends Component {
  render() {
    const { tasks, deleteTasks } = this.props;

    return tasks.length ? (
      <div className="taskslist">
        <div className="buttons-tasklist">
          <Button onClick={() => deleteTasks()} size="sm">
            Remove all
          </Button>
        </div>
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

export default connect(mapStateToProps, actions)(TasksList);
