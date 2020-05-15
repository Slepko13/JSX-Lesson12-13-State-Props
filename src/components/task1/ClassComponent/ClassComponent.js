import React, { Component } from 'react';
import FunctionalComponent from '../FunctionalComponent/FunctionalComponent';


class ClassComponent extends Component {
    state = {
        text: ""
    }
    getInputValue = (e) => {
        let value = e.target.value;
        this.setState({
            text: value

        })
    }

    render() {
        return (
            <div>
                <h1>Task 1</h1>
                <input
                    onChange={this.getInputValue}
                    value={this.state.text}
                    placeholder="Input here.."
                />

                <FunctionalComponent
                    value={this.state.text}
                />
            </div>

        );
    }
}

export default ClassComponent;