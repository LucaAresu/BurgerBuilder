import React from 'react';
import IngredientControl from './IngredientControl/IngredientControl'

const burgerControl = props => {
    const bottoni = Object.keys(props.ingredients).map(ele =>{
    return (
    <IngredientControl
        add = {() => props.add(ele)}
        remove = {() => props.remove(ele) }
        name = {ele}
        quantity = {props.ingredients[ele]}
        key = {ele}
    /> )}) 

    return bottoni;

}

export default burgerControl;