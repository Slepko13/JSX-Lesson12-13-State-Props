import React, { Component } from 'react';
import First from './First';


class Task2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.getRandom = this.getRandom.bind(this)
    }
    getRandom() {
        let random = +Math.random().toFixed(5);
        this.setState({
            random: random,
            randomMult: random * 1000
        })
    }

    render() {
        return (
            <div>
                <h1>Task 2</h1>
                <First
                    {...this.state}
                    getRandom={this.getRandom}
                />
            </div>);
    }
}

export default Task2;