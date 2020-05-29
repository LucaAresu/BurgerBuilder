import React from 'react';
import Burger from '../Burger/Burger';
import classes from './BurgerBuilder.module.css'
import BurgerControl from './BurgerControl/BurgerControl'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';

const  BurgerBuilder = props => {
    const burger = useSelector(state => state.currentBurger);

    const dispatch = useDispatch();
    const addBurgerInOrder = (burger) => dispatch(actions.addBurgerInOrder(burger));
    const addIngredient = ingredient => dispatch(actions.addIngredient(ingredient));
    const removeIngredient = ingredient => dispatch(actions.removeIngredient(ingredient));
    const clearIngredients = () => dispatch(actions.clearIngredients());

    return (
            <div className={classes.BurgerBuilder}>
                <div className={classes.BurgerContainer}>
                    <div className={classes.Burger}>
                        <Burger  ingredients= {burger}/>
                    </div>
                    
                </div>
                <BurgerControl
                    ingredients = {burger}
                    add = {addIngredient}
                    remove = {removeIngredient}
                    clear={clearIngredients}
                    order= {() =>{
                        clearIngredients();
                        addBurgerInOrder(burger)
                    }}
                />
            </div>
    ); 


}

export default BurgerBuilder;