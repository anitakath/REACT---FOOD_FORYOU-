import React, {Fragment} from 'react'

import styles from './Cart.module.css'
import Modal from '../UI/Modal'


const Cart = (props) => {

    const cartItems = <ul className={styles.cartItems}>{[
    {
        id: 'meal1',
        name: 'Pizza',
        amount: 2,
        price: 14.99
    },
    {
        id: 'meal1',
        name: 'Pizza',
        amount: 2,
        price: 14.99

    },
    {
        id: 'meal1',
        name: 'Pizza',
        amount: 2,
        price: 14.99

    },
    {
        id: 'meal1',
        name: 'Pizza',
        amount: 2,
        price: 14.99

    },
    {
        id: 'meal1',
        name: 'Pizza',
        amount: 2,
        price: 14.99
    }
    ].map(item => <li>{item.name} - {item.price}</li>)}</ul>







    //props.getCartStatus(openCart)


    return(
        <Modal openCart={props.openCart}>
           
            <div className={styles.cartContainer}>

            {cartItems}
 
 
            <div className={styles.total}>
                <span> Total amount: </span>
                <span> $15 </span>
            </div>
 
            
            <div className={styles.checkoutButtonContainer}>
                <button className={styles.closeCartButton} onClick={props.closeModal}> close </button>
            <button className={styles.checkoutButton} > order </button>
            </div>
            
            </div>

        
        </Modal>

      
    )
}

export default Cart;