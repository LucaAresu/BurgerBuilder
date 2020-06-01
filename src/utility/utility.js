import * as constants from '../constants/constants';

export const updateObject = (oldObject, element) => ({ ...oldObject, ...element}); 


export const ingredientNumber = burger =>  Object.keys(burger.ingredients).map(ele => burger.ingredients[ele]).reduce( (acc, ele) => acc + ele);


export const checkIfMeatOverLimit = (burger, type, quantity) =>  ingredientNumber({ ...burger , meat : { type : type, quantity: quantity}}) > constants.MAX_INGREDIENTS;