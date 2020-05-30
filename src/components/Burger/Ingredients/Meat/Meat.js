import React from 'react';
import Ingredient from '../Ingredients';
import * as ings from '../IngredientTypes';


const Meat = props => {
    switch(props.quantity) {
        case 1: return <Ingredient with={props.type} />; 
        case 2: return (
            <React.Fragment>
                <Ingredient with={props.type} />
                <Ingredient with={ings.BREAD_MID} />
                <Ingredient with={props.type} />
            </React.Fragment>
        ); 
        case 3: return (
            <React.Fragment>
                <Ingredient with={props.type} />
                <Ingredient with={ings.BREAD_MID} />
                <Ingredient with={props.type} />
                <Ingredient with={ings.BREAD_MID} />
                <Ingredient with={props.type} />
            </React.Fragment>
        ); 

        default: return null;
    }
}

export default Meat;