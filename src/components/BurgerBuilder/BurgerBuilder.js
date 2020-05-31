import React, { useState } from 'react';
import classes from './BurgerBuilder.module.css'
import BurgerControl from './BurgerControl/BurgerControl'
import { useSelector } from 'react-redux';
import BurgerViewer from './BurgerViewer/BurgerViewer';
import Button from '../UI/Button/Button';

const  BurgerBuilder = props => {
    const currentBurger = useSelector(state => state.currentBurger);
    const [buttonBack, setButtonBack ] = useState({
        text : 'INDIETRO',
        click : null,
        hidden : true,
        disabled : false,
    });
    const [buttonNext, setButtonNext ] = useState({
        text : 'AVANTI',
        click : null,
        hidden : true,
        disabled : false,
    })
    return (
            <div className={classes.BurgerBuilder}>
                <div className={classes.BurgerViewer}>
                    <BurgerViewer burger={currentBurger} />
                </div>
                <div className={classes.Buttons}>
                    <div>
                    <Button 
                        text={buttonBack.text}
                        click={buttonBack.click}
                        hidden={buttonBack.hidden}
                        disabled={buttonBack.disabled}
                    />    
                    </div>
                    <div>
                        <Button 
                            text={buttonNext.text}
                            click={buttonNext.click}
                            hidden={buttonNext.hidden}
                            disabled={buttonNext.disabled}
                        />
                    </div>  
                    
                </div>
                <div className={classes.BurgerControl}>
                    <BurgerControl
                        butonBack = {buttonBack}
                        setButtonBack={setButtonBack}
                        buttonNext = {buttonNext}
                        setButtonNext={setButtonNext}
                    />
                </div>
            </div>
    ); 


}

export default BurgerBuilder;