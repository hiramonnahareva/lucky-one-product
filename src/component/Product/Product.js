import React from 'react';
import './Product.css' ;
import { GiShoppingCart } from 'react-icons/gi';

const Product = ({item , addToCart}) => {
    const {name , img , price} = item ;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <p>Price: ${price}</p>
            <div className='btn-container'>
            <button onClick={()=>addToCart(item)} className='btn-add'>Order Me<GiShoppingCart/></button>
            </div>
        </div>
    );
};

export default Product;
