import React from 'react';
import classes from './BurgerControlLayout.module.css';
import { CSSTransition } from 'react-transition-group';
import './BurgerControlLayoutAnimation.css';

const BurgerControl = props => {
    
    return (
        <div className={classes.BurgerControl}>
        <CSSTransition
            appear
            in
            timeout={400}
            classNames='ControlAnimation' >
                <div>
                    {props.children}
                </div>
            </CSSTransition>
        </div> 
    )

}

export default BurgerControl;