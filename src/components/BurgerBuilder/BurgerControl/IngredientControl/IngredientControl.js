import React from 'react';
import classes from './IngredientControl.module.css';


const ingredientControl = props => {
    return (
        <div className={classes.IngredientControl}>
            <button onClick = {props.remove} disabled={!Boolean(props.quantity)}> MENO </button>
            <p>{props.name}</p>
            <button onClick = { props.add}> PIU</button>
        </div>

    );
};

export default ingredientControl;