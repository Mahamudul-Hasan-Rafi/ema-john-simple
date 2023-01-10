import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleClick = (product) => {
        console.log("Product added");
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="shop-product-container">

                {
                    products.map(product => <Product product={product}
                        handleClick={handleClick}></Product>)
                }

            </div>
            <div className="shop-cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;