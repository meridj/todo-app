/**
 * Packages
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Actions
 */
import * as actions from '../../actions';

/**
 * Components
 */
import { Field } from '../../components';

class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.handleChangeFieldValue = this.handleChangeFieldValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Handlers
   */
  handleChangeFieldValue(evt) {
    const newValue = evt.target.value;

    this.props.handleFieldValue(newValue);
  }

  // On ajounte une nouvelle tache
  handleSubmit(evt) {
    evt.preventDefault();
    //création de l'objet task
    if (this.props.fieldValue.trim().length) {
      const newTask = {
        id: new Date().valueOf(),
        taskValue: this.props.fieldValue,
        done: false
      };
      // On apelle l'action
      this.props.handleFieldValue('');
      this.props.handleSubmitTask(newTask);
    }
  }

  /**
   * Renderers
   */
  render() {
    const { fieldValue } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <Field value={fieldValue} onChange={this.handleChangeFieldValue} />
      </form>
    );
  }
}

function mapStateToProps({ fieldValue }) {
  return { fieldValue };
}

export default connect(mapStateToProps, actions)(TaskForm);
