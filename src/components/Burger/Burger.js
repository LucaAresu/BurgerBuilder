import React from 'react';
import Ingredient from './Ingredients/Ingredients';
import classes from './Burger.module.css'
import { CSSTransition} from 'react-transition-group'
import './BurgerAnimation.css';
import Bread from './Ingredients/Bread/Bread';
import * as constants from '../../constants/constants'


const Burger = props => {
        console.log(props.burger);
        const ingredients = [];
        for(let i = 0 ; i< 3 ; i++)
            ingredients.push(constants.BURGER_ORDER.map(ele =>  
                props.burger.ingredients[ele] > i ? 
                    <Ingredient 
                        key={ele+i} 
                        with={ele} 
                        meatType={props.burger.meat.type}
                    /> : 
                    null));
            
        return(
        <CSSTransition
        appear
        in
        timeout={400}
        classNames='BurgerAnimation'
     >
        <div className={classes.Burger}> 
            <Bread type={props.burger.bread}>
                {ingredients}
            </Bread>
        </div>
    </CSSTransition>
    );
};

export default Burger;