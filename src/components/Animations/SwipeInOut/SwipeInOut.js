import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './SwipeInOutAnimation.css';

const SwipeInOut = props => (
        <CSSTransition
            mountOnEnter
            unmountOnExit
            
            in={props.visible}
            timeout={200}
            classNames='SwipeInOutAnimation' 
        >
            <div>
                {props.children}
            </div>
        </CSSTransition>

);

export default SwipeInOut;