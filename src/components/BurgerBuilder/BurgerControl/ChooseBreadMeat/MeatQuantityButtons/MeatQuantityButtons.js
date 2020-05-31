import React from 'react';
import Button from '../../../../UI/Button/Button';
import { checkIfMeatOverLimit} from '../../../../../utility/utility';

const MeatQuantityButtons = props => (
    <React.Fragment>
        <Button
            text='SINGOLO'
            disabled={props.burger.meat.quantity === 1 || checkIfMeatOverLimit(props.burger, props.burger.meat , 1)}
            click={() =>props.set({...props.burger.meat , quantity : 1})}
        />
        <Button
            text='DOPPIO'
            disabled = {props.burger.meat.quantity === 2 || checkIfMeatOverLimit(props.burger, props.burger.meat , 2)}
            click={() => props.set({...props.burger.meat , quantity : 2})}
        />
                <Button
            text='TRIPLO'
            disabled = {props.burger.meat.quantity === 3 || checkIfMeatOverLimit(props.burger, props.burger.meat , 3)}
            click={() => props.set({...props.burger.meat , quantity : 3})}
        />
    </React.Fragment>
)

export default MeatQuantityButtons