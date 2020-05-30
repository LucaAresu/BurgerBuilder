import React from 'react';
import Button from '../../../../UI/Button/Button';
import * as constants from '../../../../../constants/constants';

const meatComparison = (stored, button) => stored.type !== button.type ? 
    false : stored.quantity === button.quantity ? 
        true : false; 

const SetMeat = props => {
    const meatButtons = constants.MEAT_ORDER.map(ele => (
        <div key={ele}>
            {constants.DISPLAY_NAME[ele]}
            <Button 
                text='SINGOLO'
                key={ele+1}
                disabled={meatComparison(props.burger.meat, {type : ele, quantity : 1}) || !props.burger.bread }
                click={() => props.set({type : ele , quantity : 1})}
            />
            <Button 
                text='DOPPIO'
                key={ele+2}
                disabled={meatComparison(props.burger.meat, {type : ele, quantity : 2}) || !props.burger.bread}
                click={() => props.set({type : ele , quantity : 2})}
            />
            <Button 
                text='TRIPLO'
                key={ele+3}
                disabled={meatComparison(props.burger.meat, {type : ele, quantity : 3}) || !props.burger.bread}
                click={() => props.set({type : ele , quantity : 3})}
            />
        </div>
    ) );

    return meatButtons;

}

export default SetMeat;