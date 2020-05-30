import React from 'react';
import IngredientControl from './IngredientControl/IngredientControl'
import classes from './BurgerControl.module.css';
import Button from '../../UI/Button/Button';
import { CSSTransition } from 'react-transition-group';
import './ControlAnimation.css';

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
        <CSSTransition
            appear
            in
            timeout={400}
            classNames='ControlAnimation' >
                <div>
                    {ingredienti}
                    <Button 
                        click={props.clear} 
                        text='CLEAR'
                        disabled = {! Boolean(totalIngredients)}

                    />
                    <Button
                        click={props.order}
                        text='ORDER'
                        disabled={!Boolean(totalIngredients)} 
                    />  
                  </div>
            </CSSTransition>
        </div> 
    )

}

export default burgerControl;