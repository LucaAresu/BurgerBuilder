import * as actionTypes from './actionTypes';

export const addBurgerInOrder = burger => ( {type: actionTypes.ORDER_ADD_BURGER , burger : burger});
export const removeBurgerFromOrder = burger => ( { type: actionTypes.ORDER_REMOVE_BURGER, burger : burger});