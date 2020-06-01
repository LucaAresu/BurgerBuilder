import * as actionTypes from '../actions/actionTypes';
import { updateObject, ingredientNumber } from '../../utility/utility';
import * as ings from '../../components/Burger/Ingredients/IngredientTypes';
import * as constants from '../../constants/constants';
import * as sauces from '../../components/Burger/Ingredients/SauceTypes';
import * as meatCooking from '../../components/Burger/Ingredients/Meat/MeatCookings';


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
        [ings.MEAT] : 1,
        [ings.BREAD_MID] : 0,
        [ings.SALAD] : 0,
    },
    sauce : sauces.NO_SAUCE,
    meatCooking : meatCooking.MEDIUM,
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

const setMeat = (state, action ) => {
    let breadMid;
    if(state.wantBreadMid) 
        breadMid = action.meat.quantity -1;
    else 
        breadMid = 0;
        return updateObject(state, 
    { meat : {...action.meat}, 
    ingredients : { ...state.ingredients, 
                [ings.MEAT] : action.meat.quantity , 
                [ings.BREAD_MID] : breadMid}})
}

const setBreadMid = (state, action) => {
    if(action.doWant) {
        return updateObject(state, {wantBreadMid : action.doWant , ingredients : {...state.ingredients, [ings.BREAD_MID] : state.meat.quantity -1}} );
    }else {
        return updateObject(state, {wantBreadMid : action.doWant, ingredients : {...state.ingredients, [ings.BREAD_MID] : 0 }});
    }
}


const reducer = (state = burgerState, action) => {
    switch(action.type){
        case actionTypes.BURGER_SET_BREAD : return updateObject(state, {bread : action.bread});
        case actionTypes.BURGER_SET_MEAT :  return setMeat(state,action);
        case actionTypes.BURGER_CHANGE_BREAD_MID : return setBreadMid(state,action);
        case actionTypes.BURGER_NEXT_PHASE : return updateObject(state, {phase : state.phase +1});
        case actionTypes.BURGER_PREVIOUS_PHASE : return updateObject(state, {phase : state.phase -1});
        case actionTypes.BURGER_ADD_INGREDIENT : return addIngredient(state, action);
        case actionTypes.BURGER_REMOVE_INGREDIENT : return removeIngredient(state,action);
        case actionTypes.BURGER_SET_SAUCE : return updateObject(state, {sauce : action.sauce});
        case actionTypes.BURGER_SET_COOKING : return updateObject(state, {meatCooking : action.cooking})

        default: return state;
    }
}



export default reducer;