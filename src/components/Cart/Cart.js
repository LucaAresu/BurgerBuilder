import React, { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import BurgerOrdered from './BurgerOrdered/BurgerOrdered';
import classes from './Cart.module.css';
import * as actions from '../../store/actions/index';

const Cart = props => {
    const burgers = useSelector( state => state.order.burgers);
    const [stateBurgers, setStateBurgers ] = useState(burgers.map( (burger, index) => ( { ingredients :  {...burger} , visibility: true, index : index})));
    const dispatch = useDispatch();
    const removeBurgerFromStore = burger => dispatch(actions.removeBurgerFromOrder(burger));
    const setBurger = ingredients => dispatch(actions.setIngredients(ingredients));

    const setIngredients = burger => {
        setBurger(burger.ingredients);
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

    let content =  <h1> Il Carrello è vuoto!</h1>;
    if(burgers.length)
        content = stateBurgers.map( (burger, index) => <BurgerOrdered 
            ingredients={burger.ingredients} 
            key={index}
            visibility= {burger.visibility}
            deleteAnimation= { () => hideForAnimation(burger)}
            delete = {() => removeBurger(burger)}
            setIngredients = {() => setIngredients(burger)}
            />);
    return (
        <div className={classes.Cart}>
            {content}
        </div>
    ); 
}

export default Cart;