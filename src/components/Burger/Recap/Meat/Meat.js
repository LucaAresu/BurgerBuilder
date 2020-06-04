import React from 'react';
import * as ings from '../../Ingredients/IngredientTypes';
import * as constants from '../../../../constants/constants';

const Meat = props => {
    const quantity = props.type === ings.NO_MEAT? '' : props.quantity+'x '
    const extraPane = props.type === ings.NO_MEAT || props.quantity <= 1 ? '' : <li>Extra pane: {props.mid ? 'SI' : 'NO'} </li>;
    const cooking = props.type === ings.NO_MEAT ? '' :  <li>Cottura: {constants.DISPLAY_NAME[props.cook]} </li>;


    return  (
    <React.Fragment>
        <li>Carne : {quantity+constants.DISPLAY_NAME[props.type]} </li>
        {extraPane}
        {cooking}
    </React.Fragment>
    );
}

export default Meat;