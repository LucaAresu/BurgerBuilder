import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility'
import { addBurgerInOrder } from '../actions';
import burger from '../../components/BurgerBuilder/Burger/Burger';
const initialState = {
    burger: []
};
const addBurger = (state, burger) => {
    const newBurgers = state.burger.concat({...burger});
    return updateObject(state, {burger : newBurgers});
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ORDER_ADD_BURGER: return addBurger(state, action.burger);
        default: return state;
    }
}

export default reducer;