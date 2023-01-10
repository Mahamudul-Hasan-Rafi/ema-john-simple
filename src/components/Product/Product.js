import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={props.product.img} alt="" />
            </div>
            <div className='product-info'>
                <h3>{props.product.name}</h3>
                <br />
                <p>by: {props.product.seller}</p>
                <p>${props.product.price}</p>
                <p><small>Only {props.product.stock} left in stock - Order soon</small></p>
                <br />
                <button className='main-button'
                    onClick={() => props.handleClick(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;