import React from 'react';
import Second from './Second';

const First = (props) => {
    return (<div>
        <Second
            {...props}

        />

    </div>);
}
export default First;