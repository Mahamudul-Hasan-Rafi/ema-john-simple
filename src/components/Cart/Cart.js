import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const total = props.cart.reduce((total, pd) => total + pd.price, 0)

    const formatNumber = (num) => Number(num.toFixed(2));

    let shipping_cost;
    if (total > 50)
        shipping_cost = 0;
    else if (total > 30)
        shipping_cost = 5.99;
    else if (total > 0)
        shipping_cost = 12.99;
    else
        shipping_cost = 0;

    const tax = total / 10;
    const grandTotal = total + shipping_cost + tax;

    return (
        <div className='cart-container'>
            <h2>Order Summary</h2>
            <p>Items Ordered: {props.cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Shipping cost: {shipping_cost}</p>
            <p>Tax + VAT: {formatNumber(tax)}</p>
            <p>Total Price: {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;