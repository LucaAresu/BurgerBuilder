import React from 'react';
import Ingredient from './Ingredients/Ingredients';
import classes from './Burger.module.css'
import { CSSTransition} from 'react-transition-group'
import './BurgerAnimation.css';
import Bread from './Ingredients/Bread/Bread';
import Meat from './Ingredients/Meat/Meat';
import * as ings from './Ingredients/IngredientTypes';
import * as costants from '../../constants/constants'


const Burger = props => {
        let salad = [];
        if(props.burger.ingredients[ings.SALAD]) {
            for(let i = 0; i< props.burger.ingredients[ings.SALAD] ; i++)
                salad.push(<Ingredient with={ings.SALAD} key={i} /> )
        }
        let ingredients = costants.INGREDIENT_ORDER.map(ele => {
            if(ele === ings.SALAD)
                return [];
            let ing = [];
            for(let i = 0; i< props.burger.ingredients[ele] ; i++)
                ing.push(<Ingredient with={ele} key={ele+i} /> );
            return ing;
        })
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
                <Meat quantity={props.burger.meat.quantity} type={props.burger.meat.type} wantBread={props.burger.wantBreadMid}/>
                {salad}
            </Bread>
        </div>
    </CSSTransition>
    );
};

export default Burger;