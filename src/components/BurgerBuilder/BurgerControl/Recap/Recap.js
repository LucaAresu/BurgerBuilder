import React, {useEffect, useCallback} from 'react';
import RecapBurger from '../../../Burger/Recap/Recap';
import Layout from '../BurgerControlLayout/BurgerControlLayout';


const Recap = props => {
    const previousPhase = props.previousPhase;
    const nextPhase = props.nextPhase;
    const setButtonBack = props.setButtonBack;
    const setButtonNext = props.setButtonNext;
    const burger = props.burger;
    const addOrder = useCallback(() => nextPhase(burger),[nextPhase, burger]);

    useEffect( () => {
        const timeout = setTimeout( () => {
            setButtonBack({
                text : 'INDIETRO',
                hidden : false,
                disabled : false,
                click : previousPhase,
            });
            setButtonNext({
                text : 'ORDINA',
                hidden : false,
                disabled : false,
                click : addOrder,
            })
        },200);

        return () =>  {
            clearTimeout(timeout);
            setButtonBack({
                text : 'INDIETRO',
                hidden : true,
                disabled : false,
                click : previousPhase,
            });
            setButtonNext({
                text : 'AVANTI',
                hidden : true,
                disabled : false,
                click : addOrder, 
            })

        };
    },[setButtonBack, previousPhase, setButtonNext, addOrder])


    return (
        <Layout>
            <RecapBurger burger={props.burger} />
        </Layout> 
        );
}

export default Recap;