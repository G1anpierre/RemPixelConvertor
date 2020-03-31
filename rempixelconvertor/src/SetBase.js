import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const SetBase = props => {

    const {valor} = props;

    const handleChange = event => {
        props.onBaseChange(event);
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <input onChange={handleChange} value={valor}/>
            <label>Base Number</label>
        </div>
    )
}

export default SetBase;