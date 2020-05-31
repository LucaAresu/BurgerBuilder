import React from 'react';
import classes from './BurgerViewer.module.css'
import Burger from '../../Burger/Burger';

const BurgerViewers = props => {
    let burger = null;
    if(props.burger.bread)
        burger = <Burger   burger={props.burger} />
        return ( 
            <div className={classes.BurgerContainer}>
                        <div className={classes.Burger}>
                            {burger}
                        </div>
                        </div>
        );

}

export default BurgerViewers;
