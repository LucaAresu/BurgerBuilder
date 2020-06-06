import React from 'react';
import { getPrice} from '../../../utility/utility';
import classes from './TotalPrice.module.css';
import Button from '../../UI/Button/Button';
import QRCode from 'qrcode.react';

const TotalPrice = props => { 
    const price = props.burgers.reduce((acc,ele) => acc + getPrice(ele.burger),0);
    const orderString = JSON.stringify(props.burgers.map(ele => ele.burger ));
    const message = (
        <div  className={classes.Message}>
            Ricordati di esibire il codice alla cassa
            <div>
                <QRCode value={orderString} />
            </div>
        </div>
    )
    return (
        <div className={classes.TotalPrice}>
            <p>Prezzo Totale: € {price.toFixed(2)} </p>
            <Button
                text='ORDINA'
                click={() => props.showModal(message)} />
        </div>
    )

};

export default TotalPrice;