import React, {useEffect} from 'react';
import Layout from '../BurgerControlLayout/BurgerControlLayout';
import * as constants from '../../../../constants/constants';
import IngredientSelector from './IngredientSelector/IngredientSelector';
import classes from './ChooseIngredients.module.css';
import {ingredientNumber } from '../../../../utility/utility';

const ChooseIngredients = props => {
    const previousPhase = props.previousPhase;
    const nextPhase = props.nextPhase;
    const setButtonBack = props.setButtonBack;
    const setButtonNext = props.setButtonNext;

    const totalIngredients = ingredientNumber(props.burger);

    useEffect( () => {
        const timeout = setTimeout( () => {
            setButtonBack({
                text : 'INDIETRO',
                hidden : false,
                disabled : false,
                click : previousPhase,
            });
            setButtonNext({
                text : 'AVANTI',
                hidden : false,
                disabled : false,
                click : nextPhase,
            })
        },200);

        return () => clearTimeout(timeout);
    },[setButtonBack, previousPhase, setButtonNext, nextPhase])

    return  (
        <Layout>
            <div className={classes.ChooseIngredients}>
                {constants.INGREDIENT_ORDER.map(ele =>(
                    <IngredientSelector
                        ing={ele} 
                        key={ele}

                        lessClick={() => props.removeIngredient(ele)}
                        lessHidden={props.burger.ingredients[ele] <= 0}

                        addClick={() => props.addIngredient(ele)}
                        addHidden= {  totalIngredients >= constants.MAX_INGREDIENTS || 
                            props.burger.ingredients[ele] >= constants.INGREDIENT_LIMIT[ele]   }
                        />
                ))}
            </div>
        </Layout>

    )
}

export default ChooseIngredients;