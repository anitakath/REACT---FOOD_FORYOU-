import React, {Fragment} from 'react'
import styles from './Meals.module.css'
import MealItem from './MealItem'

const MealField = () =>{

    


    return(
        <Fragment>
            <div className={styles.mealField}> 
            <h1> PIZZA </h1>
            <MealItem/>
            </div>
        </Fragment>
    )
}

export default MealField;