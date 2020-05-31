import * as actionTypes from './actionTypes';


export const addIngredient = ingredient => ({ type: actionTypes.BURGER_ADD_INGREDIENT , ingredient : ingredient});
export const removeIngredient = ingredient => ( { type: actionTypes.BURGER_REMOVE_INGREDIENT , ingredient : ingredient } );
export const clearIngredients = () => ( { type: actionTypes.BURGER_CLEAR_INGREDIENTS});
export const setIngredients = burger => ({type: actionTypes.BURGER_SET_INGREDINETS, burger : burger});

export const setBread = breadType => ({ type: actionTypes.BURGER_SET_BREAD, bread : breadType});
export const setMeat = meat => ( {type : actionTypes.BURGER_SET_MEAT, meat : meat});
export const breadMidToggle = doWant => ( { type : actionTypes.BURGER_CHANGE_BREAD_MID, doWant : doWant});
export const nextPhase = () => ({ type: actionTypes.BURGER_NEXT_PHASE});
export const previousPhase = () => ({ type: actionTypes.BURGER_PREVIOUS_PHASE});


