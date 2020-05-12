import React, { Component } from 'react';
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
const First = (props) => {
    return (<div>
        <Second
            {...props}

        />

    </div>);
}

const Second = (props) => {
    return (
        <div>
            <button onClick={props.getRandom}>Click me</button>
            <p></p>

            <div>Math random is : {props.random}</div>
            <br />
            <div>Math random multiplied : {props.randomMult}</div>
        </div>
    );
}


export default Task2;