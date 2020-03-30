import React, { Fragment } from 'react';

const Input = props => {

    const {valor, measureName} = props;

    function onChangeData(e)  {
        props.onInputChange(e, measureName);
    }

    return(


        <Fragment>
            <label>Enter {measureName}</label>
            <input value={valor} placeholder="input" onChange={onChangeData}/>
        </Fragment>
    )
}

export default Input;