import React from 'react';
import Burger from '../../Burger/Burger'
import classes from './BurgerOrdered.module.css';
import { CSSTransition} from 'react-transition-group';
import './BurgerOrderedAnimation.css'
import Button from '../../UI/Button/Button';
 
const BurgerOrdered = props => {
    const description = Object.keys(props.ingredients).map(ing => <p key={ing}> {ing} : {props.ingredients[ing]} </p>);    
    return (
        <CSSTransition
        in={props.visibility}
        appear
        unmountOnExit
        onExited={props.delete}
        timeout={{
            appear: 400,
            enter: 400,
            exit: 200,
        }}
        classNames='BurgerOrderedAnimation'>
        <div className={classes.BurgerOrdered}>
            <div className={classes.Summary}>
                <div className={classes.Burger}>
                    <Burger ingredients={props.ingredients} />
                </div>
                <div className={classes.Description}>
                    {description}
                </div>
            </div>
            <div className={classes.Buttons}>
                <Button text='ELIMINA' click={props.deleteAnimation} />
                <Button
                    text='MODIFICA'
                    click={props.setIngredients} 
                />
            </div>
        </div>
        </CSSTransition>
    );
}

export default BurgerOrdered;