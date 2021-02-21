//importation
/*
eslint no-eval: 0
*/


import React , { useState } from 'react'
// import Button from './view/components/Button';
import MathOperation from './view/components/MathOperations'
import Number from './view/components/Number'
import Result from './view/components/Result'
import Functions from './view/components/Functions'
import LodashWords from 'lodash.words'
import Sheet from 'react-swipeable-bottom-sheet'
import './App.css'


/// generation the funcion in the componenst
// Arrow function
const App = ()=>{
    //lop que ejecuta la function
    // const clickHandlerFuntion =text=> {
    //     console.log('Button.clickHandlerFunction',text);
    // }


    //arrayTextoFuncionModificaTexto => ["", funcion]    
    
    //1er posicion: valor(que inicialmente es el valor por defecto)
    // textoactual = arrayTextoFuncionModificaTexto[0]

    //2da posicion: funcion que me va permitir modificar el valor por defecto
    // const functionModificaTexto = arrayTextoFuncionModificaTexto[1]


    //array Destructuring        
    const [stack, setStack] = useState("")

// realiza la operacion si que aprezca en  la calculadora 5+4 si primero 5
// coloca la suma pero no aparece y  2 y sale el resultado 
    const items = LodashWords(stack, /[^-^+^*^/]+/g)
    // es similar a un if 
    const value = items[items.length-1]===undefined?"0":items[items.length-1]

   
    // console.log('Renderizando de App', value)
    return(
    <main className='react-calculator'>
    <Result value={value}/>
    <div className="numbers">
        <Number onClickNumber={number => {
            // console.log('number', number)
            setStack(`${stack}${number}`) 
            //se agrega el numero para que no se elimine el otro
        }}/>
    </div>
    <div className="functions">
        
        <Functions onContentClear={clear => {
                console.log('clear', clear)
                setStack('')
            }}
        onDelete={Delete =>{
            if( stack.length > 0){
            //eliminamos el ultimo valor  de la posicion 0 que elimine ese valor 
            const newStack = stack.substring(0, stack.length - 1 )
            // console.log('delete', newStack)
            setStack(newStack)
        }}
        }
        />


        </div>
        
        <MathOperation onClickOperation={operation => {
            // console.log('Operation', operation)
            setStack(`${stack}${operation}`)            
        }}

        onClickEqual={equals => {
            // console.log('equals', equals)
            setStack(eval(stack).toString())
        }}/>
    </main>
    )

}


export default App 

//exportation 


