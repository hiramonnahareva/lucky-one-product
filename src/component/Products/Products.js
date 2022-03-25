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
        setCart (newCart)
        console.log (newCart) ;
        // console.log (id)
    }
    return (
        
        <div>
             <h1>Cosmetics</h1>
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
           <Cart cart = {cart}></Cart>
           </div>
        </div>
        </div>
    );
};

export default Products;