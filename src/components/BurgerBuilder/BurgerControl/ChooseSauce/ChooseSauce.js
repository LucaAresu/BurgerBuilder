import React, { useEffect } from 'react';
import * as constants from '../../../../constants/constants';
import Button from '../../../UI/Button/Button';
import Layout from '../BurgerControlLayout/BurgerControlLayout';
import classes from './ChooseSauce.module.css';
import * as ings from '../../../Burger/Ingredients/IngredientTypes';

const ChooseSauce = props => {

    const previousPhase = props.previousPhase;
    const nextPhase = props.nextPhase;
    const setButtonBack = props.setButtonBack;
    const setButtonNext = props.setButtonNext;

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

        return () =>  {
            clearTimeout(timeout);
            /*setButtonBack({
                text : 'INDIETRO',
                hidden : true,
                disabled : false,
                click : previousPhase,
            });
            setButtonNext({
                text : 'AVANTI',
                hidden : true,
                disabled : false,
                click : nextPhase, 
            })*/

        };
    },[setButtonBack, previousPhase, setButtonNext, nextPhase])



    const sauces = constants.SAUCE_ORDER.map(ele => <Button 
        text={constants.DISPLAY_NAME[ele]}
        key={ele}
        disabled = {props.burger.sauce === ele}
        click = {() => props.setSauce(ele)} 
        />)
    const cookingButtons = constants.MEAT_COOKING_ORDER.map(ele => <Button
        text={constants.DISPLAY_NAME[ele]}
        key={ele}
        disabled = {props.burger.meatCooking === ele}
        click = { () => props.setCooking(ele)}
        />)
    const cooking = props.burger.meat.type !== ings.NO_MEAT ? <React.Fragment> 
            <p>Scegli la cottura</p> {cookingButtons}
        </React.Fragment> :
        null;

        return (
            <Layout>
                <div className={classes.ChooseSauce}>
                    <p>Scegli la salsa</p> {sauces}
                    {cooking}
                </div>
            </Layout>
        );
}

export default ChooseSauce;