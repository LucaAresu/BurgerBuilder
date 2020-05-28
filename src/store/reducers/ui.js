import * as actionTypes from '../actions/actionTypes';
import { updateObject} from '../../utility/utility'

const initialState = {
    modalShow: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.MODAL_HIDE : return updateObject(state, {modalShow: false}); 
        case actionTypes.MODAL_SHOW: return updateObject(state, {modalShow : true});
        default: return state;
    }
}

export default reducer;