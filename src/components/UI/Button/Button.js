import React from 'react';
import classes from './Button.module.css';

const Button = props => {
    const disabled = props.disabled ? true : false;
    return (
        <button className={classes.Button} onClick={props.click} disabled={disabled}> {props.text} </button>
    )
}

export default Button;