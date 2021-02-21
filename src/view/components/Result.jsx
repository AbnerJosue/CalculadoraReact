import React from 'react';
import PropTypes from 'prop-types';

const Result =({value})=>{
    // debugger
    return(
        <div className="result">
           {value} 
        </div>
    )
}
// valida el dato que se le esta enviando
Result.propTypes = {
    value: PropTypes.string.isRequired
}
// si no trae ningun valor se le asigna 0
Result.defaultProps ={
    value:"0"
}


export default Result;