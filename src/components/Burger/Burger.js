import React from 'react';
import Ingredient from './Ingredients/Ingredients';
import classes from './Burger.module.css'
import { CSSTransition} from 'react-transition-group'
import './BurgerAnimation.css';
import Bread from './Ingredients/Bread/Bread';
import Meat from './Ingredients/Meat/Meat';


const Burger = props => {
        return(
        <CSSTransition
        appear
        in
        timeout={400}
        classNames='BurgerAnimation'
     >
        <div className={classes.Burger}> 
            <Bread type={props.bread}>

                <Meat quantity={props.meat.quantity} type={props.meat.type} />

            </Bread>
        </div>
    </CSSTransition>
    );
};

export default Burger;