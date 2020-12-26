import React, { Component } from 'react';
import DateTime from '../../services/systemServices/getCurrentTime'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            health: '',
            bloodpressure: '',
            currentDate: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { this.setState({ value: event.target.value }); }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    health:
          <input type="text" value={this.state.health} onChange={this.handleChange} />        </label>
                <label>
                    bloodpressure:
          <input type="text" value={this.state.bloodpressure} onChange={this.handleChange} />        </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form