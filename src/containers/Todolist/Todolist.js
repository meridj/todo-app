/**
 * Packages
 */
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

/**
 * Styles
 */
import './Todolist.css';

/**
 * Components
 */
import { Title } from '../../components';

/**
 * Containers
 */
import { Form, TasksList } from '../';

class Todolist extends Component {
  render() {
    return (
      <div className="todolist">
        <Fade>
          <Title>minimalist todolist</Title>
          <Form />
        </Fade>
        <TasksList />
      </div>
    );
  }
}

export default Todolist;
