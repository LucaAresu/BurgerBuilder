import * as actionTypes from '../actions/actionTypes';
import { destructureBurger } from '../../utility/utility'
const initialState = [];

const removeBurger = (state,burger) => {
    return state.filter(( ele, index) => index === burger.index ? false : true );
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ORDER_ADD_BURGER: return state.concat(destructureBurger(action.burger));
        case actionTypes.ORDER_REMOVE_BURGER : return removeBurger(state, action.burger);
        default: return state;
    }
}

export default reducer;