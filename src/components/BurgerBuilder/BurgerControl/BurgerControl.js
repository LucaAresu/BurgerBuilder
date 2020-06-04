import React, {useCallback } from 'react';
import Layout from './BurgerControlLayout/BurgerControlLayout';
import ChooseBreadMeat from './ChooseBreadMeat/ChooseBreadMeat';
import ChooseIngredients from './ChooseIngredients/ChooseIngredients';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions/index';
import ChooseSauce from './ChooseSauce/ChooseSauce';
import Recap from './Recap/Recap';

const BurgerControl = props => {
    const currentBurger = useSelector(state => state.currentBurger);
    const history = props.history;
    const dispatch = useCallback(useDispatch(),[]);
    const setBread = breadType => dispatch(actions.setBread(breadType));
    const setMeat = meat => dispatch(actions.setMeat(meat));
    const breadMidToggle = doWant => dispatch(actions.breadMidToggle(doWant));
    const nextPhase = useCallback(() => dispatch(actions.nextPhase()), [dispatch]);
    const previousPhase = useCallback(() => dispatch(actions.previousPhase()), [dispatch]);
    const addIngredient = ingredient => dispatch(actions.addIngredient(ingredient));
    const removeIngredient = ingredient => dispatch(actions.removeIngredient(ingredient));
    const setSauce = sauce => dispatch(actions.setSauce(sauce));
    const setMeatCooking = cooking => dispatch(actions.setCooking(cooking));
    const addInOrder = useCallback( burger => dispatch(actions.addBurgerInOrder(burger)),[dispatch]);
    const burgerReset = useCallback( () => dispatch(actions.resetIngredients()), [dispatch] );

    const addOrder = useCallback( burger => {
        addInOrder(burger);
        burgerReset();
        history.push('/')
    },[addInOrder, burgerReset, history])
    let content;
    switch(currentBurger.phase) {
        case 0: content = <ChooseBreadMeat 
            burger = {currentBurger}
            bread = {currentBurger.bread}

            setBread = {setBread}
            setMeat = {setMeat}
            setBreadMid = {breadMidToggle}
            nextPhase = {nextPhase}

            buttonBack = {props.buttonBack}
            setButtonBack = {props.setButtonBack}
            buttonNext = {props.buttonNext}
            setButtonNext = {props.setButtonNext}
            />; 
        break;
        case 1: content = <ChooseIngredients
            burger = {currentBurger}

            addIngredient = {addIngredient}
            removeIngredient = {removeIngredient}

            nextPhase = {nextPhase}
            previousPhase = {previousPhase}

            buttonBack = {props.buttonBack}
            setButtonBack = {props.setButtonBack}
            buttonNext = {props.buttonNext}
            setButtonNext = {props.setButtonNext}
            /> 
        break;
        case 2: content = <ChooseSauce 
            burger={currentBurger}

            setSauce = {setSauce}
            setCooking = {setMeatCooking}

            nextPhase = {nextPhase}
            previousPhase = {previousPhase}

            buttonBack = {props.buttonBack}
            setButtonBack = {props.setButtonBack}
            buttonNext = {props.buttonNext}
            setButtonNext = {props.setButtonNext}
        />
        break;
        case 3: content = <Recap
        burger = {currentBurger}
        
        nextPhase = {addOrder}
        previousPhase = {previousPhase}

        buttonBack = {props.buttonBack}
        setButtonBack = {props.setButtonBack}
        buttonNext = {props.buttonNext}
        setButtonNext = {props.setButtonNext}
        />
        break;
        default: content = <Layout><h1>Errore</h1></Layout>
    }

    return content;

}

export default BurgerControl;