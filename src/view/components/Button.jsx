import React from 'react'
import PropTypes from 'prop-types'

//Componenete funcional
//type = button-long-text
// este ya no se utilizo
const Button =({ text,type, clickHandler})=>(
        <button className={type} onClick={()=>clickHandler(text)}>
            <span>{text}</span>
        </button>
    )    

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default Button;