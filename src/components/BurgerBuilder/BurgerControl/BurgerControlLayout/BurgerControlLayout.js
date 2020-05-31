import React from 'react';
import classes from './BurgerControlLayout.module.css';
import { CSSTransition } from 'react-transition-group';
import './BurgerControlLayoutAnimation.css';

const BurgerControl = props => {
    
    return (
            <CSSTransition
                mountOnEnter
                unmountOnExit
                appear
                in
                timeout={400}
                classNames='ControlAnimation' >
                <div className={classes.Content}>
                    {props.children}
                </div>
            </CSSTransition>
    )

}

export default BurgerControl;