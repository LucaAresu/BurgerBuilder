import React from 'react';
import {useSelector } from 'react-redux';
import BurgerOrdered from './BurgerOrdered/BurgerOrdered';
import classes from './Cart.module.css';
const Cart = () => {
    const burgers = useSelector( state => state.order.burgers);
    return (
    <div className={classes.Cart}>
        {burgers.map(burger => <BurgerOrdered ingredients={burger} />)}
    </div>
    ); 
}

export default Cart;