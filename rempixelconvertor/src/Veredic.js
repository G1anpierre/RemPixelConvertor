import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Veredic = props => {

    const { valor, measure, valorRem, valorPixel } = props;

    return (
        <div>
            {'Pixel' == measure 
            ? <p className="text-center">{valor} {measure} converts to {valorRem} rems</p>
            : <p className="text-center">{valor} {measure} converts to {valorPixel} pixels</p>   
            }
        </div>
    )

    
}

export default Veredic;