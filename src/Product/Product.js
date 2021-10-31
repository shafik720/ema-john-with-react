import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.products);
    const {name, price, seller, img} = props.products;
    return (
        <div className="products">
            <div className="products-img">
                <img src={img} alt="" />
            </div>
            <div className="products-second-div">
            <h2> {name} </h2>
            <p> ${price} </p>
            <p>Sold by {seller} </p>
            <button onClick={()=>{props.cartClick(props.products)}} className="cart-button">Add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;