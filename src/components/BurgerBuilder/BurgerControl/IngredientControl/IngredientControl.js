import React from 'react';
import classes from './IngredientControl.module.css';
import Button from '../../../UI/Button/Button'


const ingredientControl = props => {
    return (
        <div className={classes.IngredientControl}>
            <Button 
                click = {props.remove} 
                disabled={!Boolean(props.quantity)} 
                text='MENO' 
            />

            <p>{props.name}</p>

            <Button 
                click = { props.add} 
                text='PIU'
            />
        </div>

    );
};

export default ingredientControl;