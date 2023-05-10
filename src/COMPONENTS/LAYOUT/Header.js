import React, {Fragment} from "react";
import styles from './Header.module.css'

import headerImg from '../pictures/headerImg.jpg'
import HeaderCartButton from "./HeaderCartButton"
import Cart from '../CART/Cart'


const Header = (props) =>{

    return(
        <Fragment>
            <Cart/>
            <div className={styles.header}>
                <h1> FOOD_FOR YOU </h1>
                <HeaderCartButton openCart={props.openCart}/>
            </div>

            

            <div className={styles.headerImgContainer}>
                <img src={headerImg} alt="welcome to food heaven"/>
           
            </div>

        </Fragment>
    )
}

export default Header;