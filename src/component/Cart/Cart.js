import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart-container'>
            {
                cart.map (item => <h4>Name: {item.name}</h4>)
            }
          
        </div>
    );
};

export default Cart;