import * as constants from '../constants/constants';
import * as ings from '../components/Burger/Ingredients/IngredientTypes';

export const updateObject = (oldObject, element) => ({ ...oldObject, ...element}); 

export const ingredientNumber = burger =>  Object.keys(burger.ingredients).map(ele => burger.ingredients[ele]).reduce( (acc, ele) => acc + ele);


export const checkIfMeatOverLimit = (burger, type, quantity) =>  ingredientNumber({ ...burger , meat : { type : type, quantity: quantity}}) > constants.MAX_INGREDIENTS;

export const destructureBurger = burger => ({
    ...burger,
    meat : { ...burger.meat},
    ingredients : {...burger.ingredients}
});

export const getPrice = burger => {
    let costo=0;
    costo += constants.PRICES.bread[burger.bread];
    costo += constants.PRICES.meat[burger.meat.type]*burger.meat.quantity;
    costo += Object.keys(burger.ingredients).reduce( (acc, ele) => (acc + burger.ingredients[ele] * constants.PRICES.ingredients[ele]) ,0)
    if(burger.meat.type === ings.NO_MEAT && burger.ingredients[ings.BREAD_MID])
        costo -= burger.ingredients[ings.BREAD_MID] * constants.PRICES.bread[ings.BREAD_MID];
    costo += constants.PRICES.sauces[burger.sauce];
    return costo;
}
