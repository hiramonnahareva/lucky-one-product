import React from 'react';
import './Header.css' ;

const Header = () => {
    return (
        <div className='header'>
           <h2> LOGO</h2>
           <nav>
               <a href="/home">Home</a>
               <a href="/product">Product</a>
               <a href="/about">About</a>
               <a href="/contact">Contact</a>
           </nav>
        </div>
    );
};

export default Header;