import * as ingredients from '../components/Burger/Ingredients/IngredientTypes';
import * as bread from '../components/Burger/Ingredients/Bread/BreadTypes';

export const PRICES = {
    bread : {
        [bread.INTEGRAL] : 5,
        [bread.BREAD_SEED] : 4,
        [bread.BREAD_NO_SEED] : 4,
        [ingredients.BREAD_MID] : 0.50,
    },
    meat : {
        [ingredients.CHICKEN] : 1.50,
        [ingredients.BEEF] : 2,
    },
    ingredients : {
        [ingredients.TOMATO] : 0.50,
        [ingredients.ONION] : 0.25,
        [ingredients.BACON] : 0.35,
        [ingredients.CHEESE] : 0.30,
        [ingredients.SALAD] : 0.15,
    },
};

export const INGREDIENT_ORDER = [
    ingredients.TOMATO,
    ingredients.ONION,
    ingredients.BACON,
    ingredients.CHEESE,
    ingredients.SALAD,
];

export const BREAD_ORDER = [
    bread.BREAD_SEED,
    bread.BREAD_NO_SEED,
    bread.INTEGRAL,
];
export const MEAT_ORDER = [
    ingredients.BEEF,
    ingredients.CHICKEN,
]

export const DISPLAY_NAME = {
    [ingredients.TOMATO] : 'Pomodoro',
    [ingredients.ONION] : 'Cipolla',
    [ingredients.BACON] : 'Bacon',
    [ingredients.CHEESE] : 'Formaggio',
    [ingredients.SALAD] : 'Lattuga',
    
    [ingredients.BEEF] : 'Manzo',
    [ingredients.CHICKEN] : 'Pollo',

    [bread.BREAD_SEED] : 'Standard',
    [bread.BREAD_NO_SEED] : 'Senza Semi',
    [bread.INTEGRAL] : 'Integrale',

}