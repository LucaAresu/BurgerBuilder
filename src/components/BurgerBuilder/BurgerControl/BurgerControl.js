import React from 'react';
import IngredientControl from './IngredientControl/IngredientControl'
import classes from './BurgerControl.module.css';
import Button from '../../UI/Button/Button';

const burgerControl = props => {
    const totalIngredients = Object.keys(props.ingredients).map(ele => props.ingredients[ele]).reduce( ( acc, ele) => acc+ele);
    const ingredienti = Object.keys(props.ingredients).map(ele =>{
    return (
    <IngredientControl
        add = {() => props.add(ele)}
        remove = {() => props.remove(ele) }
        name = {ele}
        quantity = {props.ingredients[ele]}
        key = {ele}
    /> )}) 

    return (
        <div className={classes.BurgerControl}>
            {ingredienti}
            <Button 
                click={props.clear} 
                text='CLEAR'

            />
            <Button
                click={props.order}
                text='ORDER'
                disabled={!Boolean(totalIngredients)} 
            />
        </div>
    )

}

export default burgerControl;