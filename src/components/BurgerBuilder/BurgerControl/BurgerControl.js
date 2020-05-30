import React from 'react';
import Layout from './BurgerControlLayout/BurgerControlLayout';
import ChooseBreadMeat from './ChooseBreadMeat/ChooseBreadMeat';
import { useSelector } from 'react-redux';


const BurgerControl = props => {

    const currentBurger = useSelector(state => state.currentBurger);

    let content;

    switch(currentBurger.phase) {
        case 0: content = <ChooseBreadMeat />; break;

        default: content = <h1>Errore</h1>;
    }

    return (
        <Layout>
            {content}
        </Layout>
        
    )

}

export default BurgerControl;