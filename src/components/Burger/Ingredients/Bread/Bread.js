import React from 'react';
import Ingredient from '../Ingredients';
import * as breadTypes from './BreadTypes';
import * as ingredientTypes from '../IngredientTypes';

const Bread = props => {
    switch(props.type) {
        case breadTypes.BREAD_SEED : return (
            <React.Fragment>
                <Ingredient with={ingredientTypes.BREAD_TOP_SEED} />
                {props.children}
                <Ingredient with={ingredientTypes.BREAD_BOTTOM} />
            </React.Fragment>
        );

        case breadTypes.BREAD_NO_SEED : return (
            <React.Fragment>
                <Ingredient with={ingredientTypes.BREAD_TOP} />
                {props.children}
                <Ingredient with={ingredientTypes.BREAD_BOTTOM} />
            </React.Fragment>
        );

        case breadTypes.INTEGRAL : return (
            <React.Fragment>
                <Ingredient with={ingredientTypes.INTEGRAL_BREAD_TOP} />
                {props.children}
                <Ingredient with={ingredientTypes.INTEGRAL_BREAD_BOTTOM} />
            </React.Fragment>
        );
    }
}

export default Bread;