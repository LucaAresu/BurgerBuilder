import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility'
const initialState = {
    burgers: []
};
const addBurger = (state, burger) => {
    const newBurgers = state.burgers.concat({...burger});
    return updateObject(state, {burgers : newBurgers});
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ORDER_ADD_BURGER: return addBurger(state, action.burger);
        default: return state;
    }
}

export default reducer;