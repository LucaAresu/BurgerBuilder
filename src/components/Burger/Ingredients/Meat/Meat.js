import React from 'react';
import Ingredient from '../Ingredients';
import * as ings from '../IngredientTypes';


const Meat = props => {
    switch(props.type) {
        case ings.CHICKEN: return <Ingredient with={ings.CHICKEN} />;
        case ings.BEEF: return <Ingredient with={ings.BEEF} />;
        default : return null;
    }
}

export default Meat;