import React from 'react';
import classes from './Order.module.css';

const Order = (props) => {
    return (
        <div className={classes.Order}>
            <p><b>Order Number : </b>{props.order.orderNumber}</p>
            {Object.keys(props.order.ingrediantDetails).map(igKey => {
                return <span key={igKey}>{igKey} : {props.order.ingrediantDetails[igKey]}</span>
            })}
            <p><b>Order Amount </b>: {props.order.orderAmount}</p>
        </div>
    )
}

export default Order;