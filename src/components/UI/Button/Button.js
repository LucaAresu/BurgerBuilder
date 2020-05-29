import React from 'react';
import classes from './Button.module.css';
import { CSSTransition } from 'react-transition-group';
import './ButtonAnimation.css'

const Button = props => {
    let disabled = props.disabled;
    return (
        <CSSTransition 
            in={!props.disabled}
            timeout={400}
            classNames='ButtonAnimation'
            >
                <button className={classes.Button} onClick={props.click} disabled={disabled}> {props.text} </button>
        </CSSTransition>
    )
}

export default Button;