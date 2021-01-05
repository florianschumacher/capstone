import React, { useState, useEffect, Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import GetLists from '../../services/LocalStorage/GetList';
import Chart from '../page_components/ChartComponent'
import styled from 'styled-components/macro';


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
          <FieldWrapper>
            <div className="form-group">
              <label htmlFor="health"></label>
              <input type="number" className="form-control" value={this.state.health} onChange={this.onHealthInput.bind(this)} placeholder="Weight" />
            </div>
            <div className="form-group">
              <label htmlFor="bloodPressure"></label>
              <input type="number" className="form-control" value={this.state.bloodPressure} onChange={this.onBloodInput.bind(this)} placeholder="Resting Pulse" />
            </div>
          </FieldWrapper>
          <ButtonWrapper>
            <Button type="submit" className="Submit">Submit</Button>
          </ButtonWrapper>
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

    const { health, bloodPressure, currentDate } = this.state;
    console.log(this.state + 'statelog at form');
    console.log(localStorage + 'storagelog at form1');

    const BodyValuesFromLocalStorage = GetLists('bodyValues') ?? [];

    localStorage.setItem(
      'bodyValues',
      JSON.stringify([
        ...BodyValuesFromLocalStorage,
        { currentDate, health, bloodPressure },
      ])
    );
    console.log(localStorage + 'storagelog at form2');
    event.target.reset();
  }

}


const FieldWrapper = styled.div`
margin-top:1.25rem;
width: 90%;
margin-left:1.25rem;
margin-right:1.25rem;
display:flex;
flex-direction: nowrap;
justify-content: space-around;`

const ButtonWrapper = styled.div`
margin-left:1.25rem;
margin-top:1.25rem;
width: 100%;
display:flex;
flex-direction: nowrap;`

const Button = styled.button`
width: 90%;
display:flex;
flex-direction: nowrap;
text-align: center;
background-color: #4CAF50;
border: none;
color: white;
padding: 16px 32px;
text-decoration: none;
cursor: pointer;`

export default Form;

