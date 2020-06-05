import React from 'react';
import { getPrice} from '../../../utility/utility';
import classes from './TotalPrice.module.css';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../../store/actions/index';
import Button from '../../UI/Button/Button';

const TotalPrice = props => { 
    const price = props.burgers.reduce((acc,ele) => parseInt(acc)+ parseInt(getPrice(ele.burger)),0);
    const dispatch = useDispatch();
    const showModal = message => dispatch(actionTypes.showModal(message));

    return (
        <div className={classes.TotalPrice}>
            {price.toFixed(2)}
            <Button
                text='ORDINA'
                click={() => showModal('Da implementare')} />
        </div>
    )

};

export default TotalPrice;