import React from 'react';
import './Carts.css'
const Carts = (props) => {
    const {carts} = props;
    let total = 0 ;
    for(let product of carts){
        total = total + product.price;        
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items ordered: {props.carts.length} </p>
            <h3>Total Price: {total.toFixed(2)} </h3>
        </div>
    );
};

export default Carts;