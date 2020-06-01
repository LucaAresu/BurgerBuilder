import React from 'react';
import Button from '../../../../UI/Button/Button';
import {checkIfMeatOverLimit } from '../../../../../utility/utility';
import * as ings from '../../../../Burger/Ingredients/IngredientTypes';


const WantBreadMid = props => (
    <React.Fragment>
        <Button
            text='SI'
            disabled={props.burger.wantBreadMid === true || 
                checkIfMeatOverLimit( {...props.burger, 
                                        wantBreadMid : true, 
                                        ingredients : { ...props.burger.ingredients, 
                                                            [ings.BREAD_MID] : props.burger.meat.quantity -1}
                                    },   
                                        props.burger.meat.type, 
                                        props.burger.meat.quantity)}
            click={() => props.set(true)} 
        />
        <Button 
            text = 'NO'
            disabled= {props.burger.wantBreadMid === false}
            click={() => props.set(false)}
        />
    </React.Fragment>
);

export default WantBreadMid;