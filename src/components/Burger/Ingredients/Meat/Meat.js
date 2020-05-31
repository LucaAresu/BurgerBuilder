import React from 'react';
import Ingredient from '../Ingredients';
import * as ings from '../IngredientTypes';


const Meat = props => {
    if(props.type === ings.NO_MEAT)
        return null;
    if(!props.wantBread) {
        const meat = [];
        for(let i = 0; i<props.quantity; i++)
            meat.push(<Ingredient with={props.type} key={i} />);
        return meat;
    }else
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