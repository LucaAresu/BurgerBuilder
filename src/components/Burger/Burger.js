import React from 'react';
import Ingredient from './Ingredients/Ingredients';
import classes from './Burger.module.css'
import { CSSTransition} from 'react-transition-group'
import './BurgerAnimation.css';

const burger = props => {

    const ingredients = Object.keys(props.ingredients).map( ele => {
        const ing = [];
        const n = props.ingredients[ele];
        for(let i = 0 ; i < n ; i++)
        ing.push( <Ingredient with={ele} key={ele+i} idx={i} />)

        return ing;
    });
    return(
        <CSSTransition
        appear
        in
        timeout={400}
        classNames='BurgerAnimation'
     >
        <div className={classes.Burger}> 
            <Ingredient with='top' />

            {ingredients}

            <Ingredient with='bottom' />
        </div>
    </CSSTransition>
    );
};

export default burger;