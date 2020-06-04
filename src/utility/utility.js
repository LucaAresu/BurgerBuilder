import * as constants from '../constants/constants';

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
    console.log('1', costo);
    costo += constants.PRICES.bread[burger.bread];
    console.log('2', costo);
    costo += constants.PRICES.meat[burger.meat.type]*burger.meat.quantity;
    console.log('3', costo);
    costo += Object.keys(burger.ingredients).map(ele => burger.ingredients[ele] * constants.PRICES.ingredients[ele]).reduce((acc, ele) => acc+ele);    
    console.log('4', costo);
    costo += constants.PRICES.sauces[burger.sauce];
    console.log('5', costo);
    return costo.toFixed(2);
}
