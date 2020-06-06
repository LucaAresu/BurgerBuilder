import React from 'react';
import classes from './MessageCentered.module.css'

const MessageCentered = props => (
    <div className={classes.MessageCentered}>
        {props.children}
    </div>
)

export default MessageCentered;