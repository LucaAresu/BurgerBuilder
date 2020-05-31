import * as actionTypes from '../actions/actionTypes';
import { updateObject, ingredientNumber } from '../../utility/utility';
import * as ings from '../../components/Burger/Ingredients/IngredientTypes';
import * as constants from '../../constants/constants';


const burgerState = {
    phase : 0,
    bread : null,
    wantBreadMid : true,
    meat : {
        type: ings.NO_MEAT,
        quantity : 1,
    },
    ingredients : {
        [ings.TOMATO] : 0,
        [ings.ONION] : 0,
        [ings.BACON] : 0,
        [ings.CHEESE] : 0,
        [ings.SALAD] : 0,
    }
}
const addIngredient = (state,action) => {
    if(state.ingredients[action.ingredient] < constants.INGREDIENT_LIMIT[action.ingredient] && ingredientNumber(state) < constants.MAX_INGREDIENTS)
        return updateObject(state, {ingredients : 
                            {...state.ingredients, 
                            [action.ingredient] : state.ingredients[action.ingredient] +1 }});
            
    else 
        return state;
}

const removeIngredient = (state , action) => {
    if(state.ingredients[action.ingredient] > 0 )
        return updateObject(state, {ingredients : 
                                    {...state.ingredients, 
                                    [action.ingredient] : state.ingredients[action.ingredient] -1 }})
    else
        return state;
};

const reducer = (state = burgerState, action) => {
    switch(action.type){
        case actionTypes.BURGER_SET_BREAD : return updateObject(state, {bread : action.bread});
        case actionTypes.BURGER_SET_MEAT : return updateObject(state, { meat : {...action.meat}})
        case actionTypes.BURGER_CHANGE_BREAD_MID : return updateObject(state, {wantBreadMid : action.doWant})
        case actionTypes.BURGER_NEXT_PHASE : return updateObject(state, {phase : state.phase +1});
        case actionTypes.BURGER_PREVIOUS_PHASE : return updateObject(state, {phase : state.phase -1});
        case actionTypes.BURGER_ADD_INGREDIENT : return addIngredient(state, action);
        case actionTypes.BURGER_REMOVE_INGREDIENT : return removeIngredient(state,action);

        default: return state;
    }
}



export default reducer;