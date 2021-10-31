import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]);
    
    const [carts, setCarts] = useState([]);
    const cartClick = (product) =>{
        const newCart = [...carts,product];
        setCarts(newCart);
    }
    return (
        <div className="shop">
           <div className="product-div">
               
               {product.map(products=><Product 
               key = {products.key}
               products={products}
                cartClick = {cartClick}
               ></Product>)}
               
           </div>
           <div className="cart-div">
                <Carts carts={carts}></Carts>
            </div> 
        </div>
    );
};

export default Shop;