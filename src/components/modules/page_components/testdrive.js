
import React from 'react';
import DateTime from '../../services/systemServices/getCurrentTime'

export default class enterStats extends React.Component {
    state = {
        weight: '',
        heart: '',
        day: ''
    };

    handleChange = (event) => {
        const formElement = event.target
        const input = formElement.time && formElement.blood && formElement.heart
        console.log(input)
    };

    handleFormSubmit = () => { };

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    weight: <input name="weight" value={this.state.weight} onChange={this.handleChange} />
                </label>
                <label>
                    heart: <input name="heart" value={this.state.heart} onChange={this.handleChange} />
                </label>
                <label>
                    <DateTime />
                </label>
                <button type="submit">Submit</button>
            </form>
        );
    }
}