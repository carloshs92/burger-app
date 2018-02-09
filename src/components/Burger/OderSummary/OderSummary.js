import React, { Fragment } from 'react';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map((key) => {
           return (
               <li key={key}>
                   <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
               </li>)
        });
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue with checkout</p>
        </Fragment>
    );
};

export default orderSummary;