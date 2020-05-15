import React from 'react';
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
export default Second;