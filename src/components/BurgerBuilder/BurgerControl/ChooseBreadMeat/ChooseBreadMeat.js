import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../UI/Button/Button';
import * as constants from '../../../../constants/constants';
import * as actions from '../../../../store/actions/index';
import BreadButtons from './BreadButtons/BreadButtons';
import MeatButtons from './MeatButtons/MeatButtons';


const ChooseBreadMeat = props => {
    const currentBurger = useSelector(state => state.currentBurger);
    console.log('[ChooseBreadMeat.js]',currentBurger);
    
    const dispatch = useDispatch();
    const setBread = breadType => dispatch(actions.setBread(breadType));
    const setMeat = meat => dispatch(actions.setMeat(meat));

    return (
        <div>
            Scegli il tuo pane <br /><BreadButtons burger= {currentBurger} set={setBread} /><br />
            Scegli la carne <MeatButtons burger={currentBurger} set={setMeat} />
        </div>
    );
}

export default ChooseBreadMeat;