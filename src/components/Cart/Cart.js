import React, { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import BurgerOrdered from './BurgerOrdered/BurgerOrdered';
import classes from './Cart.module.css';
import * as actions from '../../store/actions/index';
import EmptyCart from './EmptyCart/EmptyCart';
import { destructureBurger } from '../../utility/utility';
import TotalPrice from './TotalPrice/TotalPrice';

const Cart = props => {
    const burgers = useSelector( state => state.order);
    const [stateBurgers, setStateBurgers ] = useState(burgers.map( (burger, index) => ( { burger :  destructureBurger(burger) , visibility: true, index : index})));
    const dispatch = useDispatch();
    const removeBurgerFromStore = burger => dispatch(actions.removeBurgerFromOrder(burger));
    const setBurger = burger => dispatch(actions.setBurger(burger));

    const setIngredients = burger => {
        setBurger(burger.burger);
        removeBurger(burger);
        props.history.push('/');
    }

    const hideForAnimation = burger => {
        const newBurgers = stateBurgers.map(ele => burger.index === ele.index ? 
            {...ele, visibility : false} : 
            {...ele } )
        setStateBurgers(newBurgers);
    }
    const removeBurger = burger => {
        let newBurgers = stateBurgers.filter(ele => ele.index === burger.index ? false : true);
        newBurgers.forEach(( ele, index) => ele.index = index);
        setStateBurgers(newBurgers);
        removeBurgerFromStore(burger);
    }

    let content =  <EmptyCart />;
    if(burgers.length) {
        const burgers = stateBurgers.map( (burger, index) => <BurgerOrdered 
            burger={burger.burger}
            key={index}
            visibility= {burger.visibility}
            deleteAnimation= { () => hideForAnimation(burger)}
            delete = {() => removeBurger(burger)}
            setIngredients = {() => setIngredients(burger)}
            />);
        content = (
            <React.Fragment>
                <TotalPrice burgers={stateBurgers} />
                {burgers}
            </React.Fragment>
        )
    }
    return (
        <div className={classes.Cart}>
            {content}
        </div>
    ); 
}

export default Cart;