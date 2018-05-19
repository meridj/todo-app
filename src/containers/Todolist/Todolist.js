/**
 * Packages
 */
import React, { Component } from 'react';
//import { Button } from 'reactstrap';

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
        <Title>best todolist in the world</Title>
        <Form />
        <TasksList />
      </div>
    );
  }
}

export default Todolist;
