import React from 'react';
import Button from '../../../../UI/Button/Button';
import * as constants from '../../../../../constants/constants';

const BreadButtons = props => {
    const breadButtons = constants.BREAD_ORDER.map(ele => (
        <Button 
        key={ele}
        text={constants.DISPLAY_NAME[ele]} 
        disabled = {props.burger.bread === ele}
        click={() => props.set(ele)}
        /> ));
    return breadButtons;
}

export default BreadButtons;