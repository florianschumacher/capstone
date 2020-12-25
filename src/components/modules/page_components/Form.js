import React, { Component } from 'react'
import DateTime from '../../services/systemServices/getCurrentTime'

const timeHandler = DateTime

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      health: '',
      bloodpressure: '',
      currentDate: ''
    }
  }


  render() {
    return (
      <div className="Form">
        <form id="SUBMIT_BODY_VALUES" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
            <label htmlFor="health">Weight:</label>
            <input type="text" className="form-control" value={this.state.health} onChange={this.onHealthInput.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="bloodpressure">Blood Pressure</label>
            <input type="bloodpressure" className="form-control" value={this.state.bloodpressure} onChange={this.onBloodInput.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="currentDate"><DateTime /></label>
            <span className="form-control" value={timeHandler} onChange={this.onDateInput.bind(this)} />
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
    this.setState({ bloodpressure: event.target.value })
  }

  onDateInput(event) {
    this.setState({ currentDate: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
}
export default Form;