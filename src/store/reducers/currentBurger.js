import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialBurger = {
    tomato: 0,
    onion: 0,
    bacon : 0,
    cheese : 0,
    beef : 0,
    chicken: 0,
    salad: 0,

}

const reducer = (state = initialBurger, action) => {
    switch(action.type){
        case actionTypes.BURGER_ADD_INGREDIENT: return updateObject(state, { [action.ingredient ] : state[action.ingredient] + 1 } );
        case actionTypes.BURGER_REMOVE_INGREDIENT: return updateObject(state, { [action.ingredient ] : state[action.ingredient] -1 } );
        case actionTypes.BURGER_CLEAR_INGREDIENTS : return updateObject(state, initialBurger);
        case actionTypes.BURGER_SET_INGREDINETS : return(state, action.burger);
        default: return state;
    }
}



export default reducer;