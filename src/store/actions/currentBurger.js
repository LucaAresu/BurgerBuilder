import * as actionTypes from './actionTypes';


export const addIngredient = ingredient => ({ type: actionTypes.BURGER_ADD_INGREDIENT , ingredient : ingredient});
export const removeIngredient = ingredient => ( { type: actionTypes.BURGER_REMOVE_INGREDIENT , ingredient : ingredient } );
export const clearIngredients = () => ( { type: actionTypes.BURGER_CLEAR_INGREDIENTS});
export const setIngredients = burger => ({type: actionTypes.BURGER_SET_INGREDINETS, burger : burger});

