import Input from '../UI/Input'
import React, {useRef, useState} from 'react'
// import AddMealButton from './AddMealButton'
import styles from './Meals.module.css'

const MealItemForm = (props) =>{

    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef();

    console.log(props.meal.id)

    const submitHandler = event =>{
        event.preventDefault();
        
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        
        if(
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 10
        ){
            setAmountIsValid(false)
            return

        }

        props.onAddToCart(enteredAmountNumber)
    }

     //+ props.meal.id
    return(
        <form onSubmit={submitHandler}>
             <Input 
             ref={amountInputRef}
             label="Amount" 
             input={{
                  id: 'amount-' + props.meal.id,
                  type: 'number',
                  min: '1',
                  max: '10',
                  step: '1',
                  defaultValue: '1'
             }}/>

             <button className={styles.addMealButton}> add </button>
             {!amountIsValid && <p> please enter a valid amount (1-10)</p>}
        </form>
    )
}

export default MealItemForm;