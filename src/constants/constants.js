import * as ingredients from '../components/Burger/Ingredients/IngredientTypes';
import * as bread from '../components/Burger/Ingredients/Bread/BreadTypes';
import * as sauces from '../components/Burger/Ingredients/SauceTypes';
import * as meatCookings from '../components/Burger/Ingredients/Meat/MeatCookings';

export const PRICES = {
    bread : {
        [bread.INTEGRAL] : 5,
        [bread.BREAD_SEED] : 4,
        [bread.BREAD_NO_SEED] : 4,
        [ingredients.BREAD_MID] : 0.50,
    },
    meat : {
        [ingredients.NO_MEAT] : 0,
        [ingredients.BEEF] : 2,
        [ingredients.CHICKEN] : 1.50,
    },
    ingredients : {
        [ingredients.TOMATO] : 0.50,
        [ingredients.ONION] : 0.25,
        [ingredients.BACON] : 0.35,
        [ingredients.CHEESE] : 0.30,
        [ingredients.SALAD] : 0.15,
    },
    sauces : {
        [sauces.NO_SAUCE] : 0,
        [sauces.SPECIAL] : 2,
        [sauces.SPECIAL_SPICY] : 2.50,
        [sauces.KETCHUP] : 1.50,
        [sauces.BARBECUE] : 2,
    }
};

export const INGREDIENT_ORDER = [
    ingredients.TOMATO,
    ingredients.ONION,
    ingredients.BACON,
    ingredients.CHEESE,
    ingredients.SALAD,
];

export const BURGER_ORDER = [
    ingredients.TOMATO,
    ingredients.ONION,
    ingredients.BACON,
    ingredients.CHEESE,
    ingredients.MEAT,
    ingredients.SALAD,
    ingredients.BREAD_MID
];

export const SAUCE_ORDER = [
    sauces.NO_SAUCE,
    sauces.SPECIAL,
    sauces.SPECIAL_SPICY,
    sauces.KETCHUP,
    sauces.BARBECUE,
]
export const MEAT_COOKING_ORDER = [
    meatCookings.RARE,
    meatCookings.MEDIUM,
    meatCookings.WELL_DONE,
];

export const INGREDIENT_LIMIT = {
    [ingredients.TOMATO] : 2,
    [ingredients.ONION] : 2,
    [ingredients.BACON] : 3,
    [ingredients.CHEESE] : 3,
    [ingredients.SALAD] : 3,
}

export const BREAD_ORDER = [
    bread.BREAD_SEED,
    bread.BREAD_NO_SEED,
    bread.INTEGRAL,
];
export const MEAT_ORDER = [
    ingredients.NO_MEAT,
    ingredients.BEEF,
    ingredients.CHICKEN,
]

export const DISPLAY_NAME = {
    [ingredients.TOMATO] : 'Pomodoro',
    [ingredients.ONION] : 'Cipolla',
    [ingredients.BACON] : 'Bacon',
    [ingredients.CHEESE] : 'Formaggio',
    [ingredients.SALAD] : 'Lattuga',
    
    [ingredients.NO_MEAT] : 'Senza Carne',
    [ingredients.BEEF] : 'Manzo',
    [ingredients.CHICKEN] : 'Pollo',

    [bread.BREAD_SEED] : 'Standard',
    [bread.BREAD_NO_SEED] : 'Senza Semi',
    [bread.INTEGRAL] : 'Integrale',

    [sauces.NO_SAUCE] : 'Nessuna',
    [sauces.SPECIAL] : 'Special',
    [sauces.SPECIAL_SPICY] : 'Special Spicy',
    [sauces.KETCHUP] : 'Ketchup',
    [sauces.BARBECUE] : 'Barbecue',

    [meatCookings.RARE] : 'Al Sangue',
    [meatCookings.MEDIUM] : 'Media',
    [meatCookings.WELL_DONE] : 'Ben Cotta',
}

export const MAX_INGREDIENTS = 13;