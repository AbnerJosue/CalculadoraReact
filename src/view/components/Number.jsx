import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

//CONCEPTO
//DRY: DON'T REPEAT YOURSELF
const numbers = [7,8,9,4,5,6,1,2,3,0]

const renderButtons = onClickNumber =>{
    // <Button  text="1"  clickHandler={onClickNumber}  />

    const renderButton= number => (
        <Button
            key={number} 
            text={number.toString()}  
            clickHandler={onClickNumber}  
        />
    )

    return numbers.map(renderButton)
}

const Number = ({onClickNumber}) => (
    <section className="number">
      {
        renderButtons(onClickNumber)
      }
    </section>
)

Number.protoType ={
    onClickNumber: PropTypes.func.isRequired
}


export default Number