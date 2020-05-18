import React from 'react';
import Ingredient from './Ingredients/Ingredients';
import classes from './Burger.module.css'

const burger = props => {

    const ingredients = Object.keys(props.ingredients).map( ele => {
        let ing = [];
        let n = props.ingredients[ele];
        for(let i = 0 ; i < n ; i++)
        ing = ing.concat( <Ingredient with={ele} key={ele+i} max={n} idx={i} />)

        return ing;
    });
    return(
    <div className={classes.Burger}> 
        <Ingredient with='top' />

        {ingredients}

        <Ingredient with='bottom' />
    </div>
    );
};

export default burger;