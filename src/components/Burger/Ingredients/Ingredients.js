import React from 'react';
import classes from './Ingredients.module.css'
import * as ingTypes from './IngredientTypes';

const ingredients = props => {
    let ingrediente;
    switch(props.with) {
        case ingTypes.BREAD_TOP_SEED: ingrediente = (
            <div className={classes.BreadTop}>
                <div className={classes.Seeds1} ></div>
                <div className={classes.Seeds2} ></div>
            </div>
            );
        break;
        case ingTypes.BREAD_TOP : ingrediente = <div className={classes.BreadTop} />; break;
        case ingTypes.INTEGRAL_BREAD_TOP : ingrediente = <div className={classes.IntegralBreadTop} />; break;
        case ingTypes.BREAD_MID : ingrediente = <div className={classes.BreadMid} ></div>; break;
        case ingTypes.BREAD_BOTTOM : ingrediente = <div className={classes.BreadBottom} ></div>;break;
        case ingTypes.INTEGRAL_BREAD_BOTTOM : ingrediente = <div className={classes.IntegralBreadBottom} />; break;
        case ingTypes.CHEESE : ingrediente = <div className={classes.Cheese} />; break;
        case ingTypes.BACON : ingrediente = <div className={classes.Bacon} />; break;
        case ingTypes.SALAD : ingrediente = <div className={classes.Salad} />; break;
        case ingTypes.BEEF :
        case ingTypes.CHICKEN : ingrediente = props.idx === 0 ?  <div className={classes.Chicken} /> :  (
            <React.Fragment>
                <div className={classes.BreadMid} />
                <div className={classes.Beef} /> 
            </React.Fragment>
        );
        break;
        case ingTypes.TOMATO : ingrediente = <div className={classes.TomatoContainer}><div className={classes.Tomato} /></div>; break;
        case ingTypes.ONION : ingrediente = <div className={classes.OnionContainer}>
            <div className={classes.Onion} />
            <div className={classes.Onion2} />
            <div className={classes.Onion3} />
            </div>; break;

        default : ;

    }
    return ingrediente;
}

export default ingredients;