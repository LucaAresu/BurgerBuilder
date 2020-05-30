import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';
import * as ings from '../../components/Burger/Ingredients/IngredientTypes';


const burgerState = {
    phase : 0,
    bread : null,
    meat : {
        type: null,
        quantity : 0,
    },
    ingredients : {
        [ings.TOMATO] : 0,
        [ings.ONION] : 0,
        [ings.BACON] : 0,
        [ings.CHEESE] : 0,
        [ings.SALAD] : 0,
    }
}

const reducer = (state = burgerState, action) => {
    switch(action.type){
        case actionTypes.BURGER_SET_BREAD : return updateObject(state, {bread : action.bread});
        case actionTypes.BURGER_SET_MEAT : return updateObject(state, { meat : {...action.meat}})
        default: return state;
    }
}



export default reducer;