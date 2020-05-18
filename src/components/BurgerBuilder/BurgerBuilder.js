import React, {Component } from 'react';
import Burger from './Burger/Burger';
import classes from './BurgerBuilder.module.css'
import BurgerControl from './BurgerControl/BurgerControl'
import ingredientControl from './BurgerControl/IngredientControl/IngredientControl';

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            bacon : 0,
            cheese : 0,
            meat : 0,
            salad : 0,
        }
    }

    addIngredient = ingredient => {
        let oldState = {...this.state.ingredients};
        oldState[ingredient]++;
        this.setState({
            ingredients : oldState
        })
    }
    removeIngredient = ingredient => {
        let oldState = {...this.state.ingredients};
        oldState[ingredient] --;
        this.setState({
            ingredients : oldState
        })
    }

    render() {
        return (
            <div className={classes.BurgerBuilder}>
                <Burger  ingredients= {this.state.ingredients}/>
                <BurgerControl
                    ingredients = {this.state.ingredients}
                    add = {this.addIngredient}
                    remove = {this.removeIngredient}
                />
            </div>
        );
    }

}

export default BurgerBuilder;