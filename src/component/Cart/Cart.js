import React from 'react';
import './Cart.css'

const Cart = ({cart , removeAll , chooseItem }) => {
    return (
        <div className='cart'>
            <div className='cart-info'>
            {
                cart.map (item => <h4 key={item.id}>
                    <img src={item.img} alt="" />
                    Name: {item.name}</h4>)
            }
            </div>
            <button onClick={chooseItem}>choose one</button>
            <button onClick={removeAll}>Remove</button>
          
        </div>
    );
};

export default Cart;
