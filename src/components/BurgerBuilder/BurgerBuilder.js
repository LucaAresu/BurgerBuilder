import React from 'react';
import Burger from '../Burger/Burger';
import classes from './BurgerBuilder.module.css'
import BurgerControl from './BurgerControl/BurgerControl'
import { useSelector } from 'react-redux';

const  BurgerBuilder = props => {
    const currentBurger = useSelector(state => state.currentBurger);
    let burger = null;
    if(currentBurger.bread)
        burger = <Burger 
            bread={currentBurger.bread}
            meat = {currentBurger.meat} 
            ingredients = {currentBurger.ingredients} 
        />


    return (
            <div className={classes.BurgerBuilder}>
                <div className={classes.BurgerContainer}>
                    <div className={classes.Burger}>
                        {burger}
                    </div>
                    
                </div>
                <BurgerControl />
            </div>
    ); 


}

export default BurgerBuilder;