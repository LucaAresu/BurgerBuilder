import * as actionTypes from './actionTypes';

export const showModal = message => ({ type: actionTypes.MODAL_SHOW, message : message });
export const hideModal = () => ({ type: actionTypes.MODAL_HIDE});