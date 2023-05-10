import React, {Fragment, useContext} from 'react'
import styles from './Meals.module.css'
import Card from '../UI/Card'
import AddMealButton from './AddMealButton'
import Input from '../UI/Input'
import bibimbap from'../pictures/bibimbap.jpg'
import tacos from'../pictures/tacos.jpg'
import pizza from'../pictures/pizza.jpg'
import MealItemForm from './MealItemForm.js'
import CartContext from '../STORE/cart-context'

const MealItem = (props) =>{

    const allMeals = [
        {
            id: 'meal1',
            name: 'PIZZA',
            description: 'the perfect italian way',
            price: '14.99',
            img: pizza
        },
        {
            id: 'meal2',
            name: 'BIBIMBAP',
            description: 'the taste of korea',
            price: '13.99',
            img: bibimbap
        },
        {
            id: 'meal3',
            name: 'TACOS',
            description: 'awesome mexican food',
            price: '12.99',
            img: tacos
        }
    ]

    console.log(allMeals)

  

    const prices = allMeals.map((x) => x.price)
    console.log(prices)

    const cartCtx = useContext(CartContext)

    const addToCartHandler = amount =>{
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }


    return (
        <Fragment>
            <Card>
                <ul>
                        {allMeals.map(meal => (
                            <li 
                            id={meal.id}
                            className={styles.mealItem}
                            key={meal.id}
                            name={meal.name}
                            description={meal.description}
                            price={meal.price}
                            img={meal.img}
                            >
                                <div className={styles.mealInfoLeft}>
                                    <h1> {meal.name}</h1>
                                    <h2> {meal.description}</h2>
                                    <h2> $ {meal.price}</h2>
                                </div>

                                <div className={styles.mealInfoMiddle}>
                             
                                <div className={styles.mealImgContainer}>
                                    <img src= {meal.img}></img>
                                </div>
                               
                                
                                </div>

                                <div className={styles.mealInfoRight}>
                                   <MealItemForm meal={meal} onAddToCart={addToCartHandler} />
                                </div>
                               
                                
                            </li>
                        
                        ))}
                    </ul>

              </Card>
         

        </Fragment>
    )
}

export default MealItem;