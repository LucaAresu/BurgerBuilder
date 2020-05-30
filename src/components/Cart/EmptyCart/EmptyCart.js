import React from 'react';
import { CSSTransition } from 'react-transition-group'
import './EmptyCartAnimation.css';
import classes from './EmptyCart.module.css';

const EmptyCart = props => {
        
    return (
        <CSSTransition
        in
        appear
        timeout={400}
        classNames='EmptyCartAnimation'
        >
            <h1 className={classes.EmptyCart}>Non hai eseguito alcun ordine</h1>
        </CSSTransition>
    )    
}

export default EmptyCart