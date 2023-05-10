import styles from './Header.module.css'
import {useContext} from 'react'
import CartContext from '../STORE/cart-context'

const HeaderCartButton = (props) =>{

    const cartCtx = useContext(CartContext)
  

    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);


    return(
        <button className={styles.HeaderCartButtonContainer} onClick={props.openCart}>
            <span> your cart </span>
            <div className={styles.cartCounter}> {numberOfCartItems} </div>
           
        </button>
    )
}

export default HeaderCartButton;