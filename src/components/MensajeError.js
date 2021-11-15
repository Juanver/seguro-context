import React from 'react';

const MensajeError = ({mensaje}) => {
    return ( 
        <p className="alert alert-danger">{mensaje}</p>
    );
}
 
export default MensajeError;