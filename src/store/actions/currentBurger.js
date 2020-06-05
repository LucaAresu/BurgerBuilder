import * as actionTypes from './actionTypes';


export const addIngredient = ingredient => ({ type: actionTypes.BURGER_ADD_INGREDIENT , ingredient : ingredient});
export const removeIngredient = ingredient => ( { type: actionTypes.BURGER_REMOVE_INGREDIENT , ingredient : ingredient } );
export const resetIngredients = () => ( { type: actionTypes.BURGER_RESET});
export const setBurger = burger => ({type: actionTypes.BURGER_SET, burger : burger});

export const setBread = breadType => ({ type: actionTypes.BURGER_SET_BREAD, bread : breadType});
export const setMeat = meat => ( {type : actionTypes.BURGER_SET_MEAT, meat : meat});
export const breadMidToggle = doWant => ( { type : actionTypes.BURGER_CHANGE_BREAD_MID, doWant : doWant});
export const setCooking = cooking  => ( {type : actionTypes.BURGER_SET_COOKING, cooking : cooking});
export const setSauce = sauce => ( { type : actionTypes.BURGER_SET_SAUCE, sauce : sauce});

export const nextPhase = () => ({ type: actionTypes.BURGER_NEXT_PHASE});
export const previousPhase = () => ({ type: actionTypes.BURGER_PREVIOUS_PHASE});


