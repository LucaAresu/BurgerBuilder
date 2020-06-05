import * as actionTypes from '../actions/actionTypes';
import { updateObject} from '../../utility/utility'

const initialState = {
    modalShow: false,
    modalMessage : null,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.MODAL_HIDE : return updateObject(state, {modalShow: false, modalMessage : null}); 
        case actionTypes.MODAL_SHOW: return updateObject(state, {modalShow : true, modalMessage : action.message});
        default: return state;
    }
}

export default reducer;