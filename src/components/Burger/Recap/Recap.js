import React from 'react';
import * as constants from '../../../constants/constants';
import Meat from './Meat/Meat'
import classes from './Recap.module.css';
import {getPrice } from '../../../utility/utility'

const Recap = props => (
    <div className={classes.Recap}>
        <div>
        <h3>Lista Ingredienti</h3>
        <ul>
            <li>Pane : {constants.DISPLAY_NAME[props.burger.bread]} </li>
            <Meat 
                type={props.burger.meat.type} 
                quantity={props.burger.meat.quantity}  
                mid={props.burger.wantBreadMid}
                cook={props.burger.meatCooking}/>
            <li>Ingredienti: {constants.INGREDIENT_ORDER.map(ele => 
                props.burger.ingredients[ele] > 0 ? 
                    props.burger.ingredients[ele]+'x '+ constants.DISPLAY_NAME[ele] +' ' :
                    ' '
            )}  </li>
            <li>Salsa : {constants.DISPLAY_NAME[props.burger.sauce]}</li>
        </ul>
        </div>
        <div>
            <h3> Prezzo</h3>
                {getPrice(props.burger)}
        </div>
    </div>
)

export default Recap;