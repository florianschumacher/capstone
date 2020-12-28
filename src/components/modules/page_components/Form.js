import React, { useState, useEffect, Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import GetLists from '../../services/LocalStorage/GetList';
import Chart from '../page_components/ChartComponent'


class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      health: '',
      bloodPressure: '',
      currentDate: new Date().toLocaleDateString('ca-de')
    }
  }

  render() {
    return (
      <div className="Form">
        <form id="SUBMIT_BODY_VALUES" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
            <label htmlFor="health">Weight:</label>
            <input type="number" className="form-control" value={this.state.health} onChange={this.onHealthInput.bind(this)} maxlength="3" min="0" max="300" />
          </div>
          <div className="form-group">
            <label htmlFor="bloodPressure">Resting Pulse</label>
            <input type="number" className="form-control" value={this.state.bloodPressure} onChange={this.onBloodInput.bind(this)} maxlength="3" min="0" max="300" />
          </div>
          <button type="submit" className="Submit">Submit</button>
        </form>
      </div>
    );
  }

  onHealthInput(event) {
    this.setState({ health: event.target.value })
  }

  onBloodInput(event) {
    this.setState({ bloodPressure: event.target.value })
  }

  onDateInput(event) {
    this.setState({ currentDate: event.target.value })
  }

  handleSubmit(event) {
    const form = event.target
    form.reset()
    event.preventDefault();
    console.log(this.state);
    const { health, bloodPressure, currentDate } = this.state;
    console.log(localStorage);

    const BodyValuesFromLocalStorage = GetLists('bodyValues') ?? [];

    localStorage.setItem(
      'bodyValues',
      JSON.stringify([
        ...BodyValuesFromLocalStorage,
        { currentDate, health, bloodPressure },
      ])
    );
    event.target.reset();
  }

}


export default Form;