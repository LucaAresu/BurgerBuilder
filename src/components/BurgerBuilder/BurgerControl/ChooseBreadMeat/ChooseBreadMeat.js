import React, {useEffect} from 'react';
import BreadButtons from './BreadButtons/BreadButtons';
import MeatButtons from './MeatButtons/MeatButtons';
import MeatQuantityButtons from './MeatQuantityButtons/MeatQuantityButtons';
import SwipeAnimation from '../../../Animations/SwipeInOut/SwipeInOut';
import * as ingredients from '../../../Burger/Ingredients/IngredientTypes';
import WantBreadMid from './WantBreadMid/WantBreadMid';
import Layout from '../BurgerControlLayout/BurgerControlLayout';


const ChooseBreadMeat = props => {

    const bread = props.bread;
    const hidden = !Boolean(props.bread)
    const nextPhase = props.nextPhase;
    const setButtonNext = props.setButtonNext;
    const setButtonBack = props.setButtonBack
    useEffect( () => {
        setButtonNext({
            text : 'AVANTI',
            hidden : hidden,
            disabled : false,
            click : nextPhase,
        });
        return () => {
            setButtonNext({
                text : 'AVANTI',
                hidden : true,
                disabled : true,
                click : nextPhase,
            });
        }
    },[bread, hidden, nextPhase, setButtonNext]);

    useEffect( () => {
        setButtonBack({
            text : 'INDIETRO',
            hidden : true,
            disabled: true,
        });
    },[setButtonBack]);

    return (
        <Layout>
            <div>
            Scegli il tuo pane <br /><BreadButtons burger= {props.burger} set={props.setBread} /><br />
            <SwipeAnimation visible={Boolean(props.burger.bread)}>
                <p>Scegli la carne</p>
                <MeatButtons burger={props.burger} set={props.setMeat} />
            </SwipeAnimation>
            <SwipeAnimation visible={props.burger.meat.type !== ingredients.NO_MEAT}>
                <p>Scegli la quantità</p>
                <MeatQuantityButtons burger={props.burger} set={props.setMeat} />
            </SwipeAnimation>
            <SwipeAnimation visible={props.burger.meat.quantity > 1 && props.burger.meat.type !== ingredients.NO_MEAT}>
                <p>Pane tra la carne</p>
                <WantBreadMid burger={props.burger} set={props.setBreadMid} />
            </SwipeAnimation>
        </div>    
        </Layout>

    );
}

export default ChooseBreadMeat;