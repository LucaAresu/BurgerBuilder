import * as ings from '../components/Burger/Ingredients/IngredientTypes';
import * as constants from '../constants/constants';

export const updateObject = (oldObject, element) => ({ ...oldObject, ...element}); 

const meatQuantity = burger => {
    if(burger.meat.type === ings.NO_MEAT)
        return 0;
    if(!burger.wantBreadMid) {
        return burger.meat.quantity; 
    }else {
        return (burger.meat.quantity -1) *2 +1;
    }
}
export const ingredientNumber = burger => meatQuantity(burger) + Object.keys(burger.ingredients).map(ele => burger.ingredients[ele]).reduce( (acc, ele) => acc + ele);


export const checkIfMeatOverLimit = (burger, type, quantity) =>  ingredientNumber({ ...burger , meat : { type : type, quantity: quantity}}) > constants.MAX_INGREDIENTS;