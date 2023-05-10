import React, {Fragment} from 'react'
import styles from './Meals.module.css'

const AddMealButton = () =>{


    const addMealHandler = (e) =>{
        e.preventDefault();

      
    }


    return(
        <Fragment>
            <form 
            className={styles.addMealButtonForm}
            onSubmit={addMealHandler}>
                <button className={styles.addMealButton}> add to cart</button>
            </form>
        </Fragment>

    )
}

export default AddMealButton;