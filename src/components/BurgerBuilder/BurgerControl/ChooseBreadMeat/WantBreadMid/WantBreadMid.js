import React from 'react';
import Button from '../../../../UI/Button/Button';
import {checkIfMeatOverLimit } from '../../../../../utility/utility';


const WantBreadMid = props => (
    <React.Fragment>
        <Button
            text='SI'
            disabled={props.burger.wantBreadMid === true || checkIfMeatOverLimit( {...props.burger, wantBreadMid : true}, props.burger.meat.type, props.burger.meat.quantity)}
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