import React  from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions'
import { CSSTransition } from 'react-transition-group'
import "./ModalAnimation.css";

const Modal = props => {
    const dispatch = useDispatch();
    const closeModal = () => dispatch(actions.hideModal() );
    const show = useSelector( state =>  state.ui.modalShow);
    const modalMessage = useSelector(state => state.ui.modalMessage);
    return (    
    <React.Fragment>
        <Backdrop clicked={closeModal} show={show} />
        <CSSTransition
            mountOnEnter
            unmountOnExit
            in= {show}
            timeout={200}
            classNames='ModalAnimation'
         >
            <div className={classes.Modal}>
            {modalMessage}
            </div>       
        </CSSTransition>
    </React.Fragment>);


    
}

export default Modal;