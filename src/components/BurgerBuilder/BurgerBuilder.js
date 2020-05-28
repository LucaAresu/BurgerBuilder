import React, { useState } from 'react';
import Burger from '../Burger/Burger';
import classes from './BurgerBuilder.module.css'
import BurgerControl from './BurgerControl/BurgerControl'
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';

const  BurgerBuilder = props => {
    const [ingredients , setIngredients ] = useState({
        bacon : 0,
        cheese : 0,
        meat : 0,
        salad : 0,
    });

    const dispatch = useDispatch();
    const addBurgerInOrder = (burger) => dispatch(actions.addBurgerInOrder(burger))

    const addIngredient = ingredient => {
        const newIngredients = {...ingredients, [ingredient] : ingredients[ingredient]+1};
        setIngredients(newIngredients);
    }

    const removeIngredient = ingredient => {
        setIngredients({ ...ingredients, [ingredient] : ingredients[ingredient] -1 });
    }
    const clearIngredients = () => {
        setIngredients( Object.keys(ingredients).map(ele => ( { [ele] : 0 }) ).reduce( (tot, ele ) => ( { ...tot, ...ele }) ) )
    }
    return (
            <div className={classes.BurgerBuilder}>
                <div className={classes.BurgerContainer}>
                    <div className={classes.Burger}>
                        <Burger  ingredients= {ingredients}/>
                    </div>
                    
                </div>
                <BurgerControl
                    ingredients = {ingredients}
                    add = {addIngredient}
                    remove = {removeIngredient}
                    clear={clearIngredients}
                    order= {() =>{
                        clearIngredients();
                        addBurgerInOrder(ingredients)
                    }}
                />
            </div>
    );


}

export default BurgerBuilder;