import React from 'react';
import Button from '../../../../UI/Button/Button';
import classes from './IngredientSelector.module.css';
import * as costants from '../../../../../constants/constants'

const IngredientSelector = props => (
    <div className={classes.IngredientSelector}>
        <div>
            <Button
                text='MENO'
                hidden={props.lessHidden}
                click={props.lessClick}
            />    
        </div>
        
        {costants.DISPLAY_NAME[props.ing]}
        <div>
            <Button
                text='PIU'
                hidden={props.addHidden}
                click={props.addClick}
            />
        </div>
        

    </div>

);


export default IngredientSelector;