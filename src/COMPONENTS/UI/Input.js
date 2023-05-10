import React from 'react'
import styles from './Input.module.css'



const Input = React.forwardRef((props, ref) =>{


    console.log(props.input.id)
    


    // im input des return kann id={...} durch {...props.input} ersetzt werden. Verstehe des noch net so ganz  :/
    return(
        <div className={styles.inputContainer}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} id={props.input.id} {...props.input} />
        </div>
        
       
    )
});

export default Input;