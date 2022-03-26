import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import './products.css' ;


const Products = () => {
    const [products , setProduct] = useState ([]);
    const [cart , setCart] = useState ([]);
    useEffect (()=> {
        fetch ('product.json') 
        .then (res => res.json ())
        .then (data => setProduct (data)) ;
    } , [])
    const addToCart = item => {
        const newCart = [...cart , item]
        if (newCart.length <= 4 ){
            setCart (newCart)
           
        }
       else {
        alert ('not more than 4') ;
       }
    }
    const removeAll = () => {
        setCart ([])
    }
    const chooseItem = () => {
       const newCart = []
        if (cart.length === 0){
            alert ('no item found')
        }
        else {
        newCart.push(cart[Math.floor((Math.random()*cart.length))])
        setCart (newCart)
        }
    }
    return (
        
        <div>
             <h1>Beauty Products</h1>
             <div className="products-container">
           <div className="product-container">
           {
               products.map (item =>
                  <Product
                  key={item.id}
                  item ={item}
                  addToCart = {addToCart}>
                  </Product>)
           }
           </div>
           <div className="cart-container">
           <h2>Order Item</h2>
           <Cart 
           chooseItem = {chooseItem}
           removeAll = {removeAll}
           cart = {cart}></Cart>
           </div>
        </div>
        </div>
    );
};

export default Products;