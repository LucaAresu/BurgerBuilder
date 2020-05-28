import React from 'react';
import classes from './Ingredients.module.css'

const ingredients = props => {
    let ingrediente;
    switch(props.with) {
        case 'top': ingrediente = (
            <div className={classes.BreadTop}>
                <div className={classes.Seeds1} ></div>
                <div className={classes.Seeds2} ></div>
            </div>
            );
        break;
        case 'mid' : ingrediente = <div className={classes.BreadMid} ></div>
        break;
        case 'bottom' : ingrediente = <div className={classes.BreadBottom} ></div>
        break;
        case 'cheese' : ingrediente = <div className={classes.Cheese} />
        break;
        case 'bacon' : ingrediente = <div className={classes.Bacon} />
        break;
        case 'salad' : ingrediente = <div className={classes.Salad} />
        break;
        case 'meat' : ingrediente = props.idx === 0 ?  <div className={classes.Meat} /> :  (
            <React.Fragment>
                <div className={classes.BreadMid} />
                <div className={classes.Meat} /> 
            </React.Fragment>
        );
        break;

        default : ;

    }
    return ingrediente;
}

export default ingredients;