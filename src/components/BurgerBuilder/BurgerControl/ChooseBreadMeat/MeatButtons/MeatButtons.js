import React from 'react';
import Button from '../../../../UI/Button/Button';
import * as constants from '../../../../../constants/constants';
import { checkIfMeatOverLimit } from '../../../../../utility/utility'

const MeatButtons = props => constants.MEAT_ORDER.map(ele => (
            <Button 
                text={constants.DISPLAY_NAME[ele]}
                key={ele}
                disabled={props.burger.meat.type === ele || !props.burger.bread || checkIfMeatOverLimit(props.burger, ele, props.burger.meat.quantity)}
                click={() => props.set({...props.burger.meat , type : ele})} 
            />
    ));
export default MeatButtons;