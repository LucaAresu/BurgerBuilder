import React from 'react';
import Burger from '../../Burger/Burger'
import classes from './BurgerOrdered.module.css';

const BurgerOrdered = props => {
    const description = Object.keys(props.ingredients).map(ing => <p> {ing} : {props.ingredients[ing]} </p>);    
    
    return (
        <div className={classes.BurgerOrdered}>
            <div className={classes.Burger}>
                <Burger ingredients={props.ingredients} />
            </div>
            {description}fsafsasaf
        </div>
    );
}

export default BurgerOrdered;