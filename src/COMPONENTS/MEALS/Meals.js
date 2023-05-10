import React from 'react'
import styles from './Meals.module.css'
import MealField from './MealField'
import MealsTitle from './MealsTitle'




const Meals = () =>{


    return (

        <div className={styles.mealsContainer}>
            
            <MealsTitle/>
            <MealField/>

        </div>
    )
}

export default Meals