import React from 'react';
import classes from './Button.module.css';
import { CSSTransition } from 'react-transition-group';
import './ButtonAnimation.css'

const Button = props => {
    return (
        <CSSTransition 
            mountOnEnter
            in={!props.hidden}
            timeout={400}
            classNames='ButtonAnimation'
            >
                <button className={classes.Button} onClick={props.click} disabled={props.disabled}> {props.text} </button>
        </CSSTransition>
    )
}

export default Button;