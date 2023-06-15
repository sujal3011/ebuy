import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {

  const [cart, setCart] = useState({});
  const [cartPrice, setCartPrice] = useState();

  useEffect(()=>{
    try {

      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
      
    } catch (error) {
      console.error(error);
      localStorage.clear();
    } 

  },[]);

  const saveCart=(newCart)=>{
    localStorage.setItem("cart",JSON.stringify(newCart));
    let keys=Object.keys(cart);
    let totalPrice=0;
    for(let i=0;i<keys.length;i++){
      totalPrice+=cart[keys[i]].subtotal;
    }
    setCartPrice(totalPrice);

  }

  const addToCart=(itemCode,qty,price,name,size,variant)=>{

    let newCart=cart;
    if(itemCode in cart){
      newCart[itemCode].qty=cart[itemCode].qty + qty; 
      newCart[itemCode].subtotal=cart[itemCode].subtotal + qty*price;
      
    }
    else{
      let subtotal=qty*price;
      newCart[itemCode]={qty,price,name,size,variant,subtotal};
    }
    setCart(newCart);
    saveCart(newCart);

  }

  const clearCart=()=>{
    setCart({});
    saveCart({});
  }

  const reduceItemQuantityFromCart=(itemCode,qty)=>{

    let newCart=cart;
    if(itemCode in cart){
      newCart[itemCode].qty=cart[itemCode].qty - qty; 
      newCart[itemCode].subtotal-=qty*cart[itemCode].price;
      let totalPrice=cartPrice-qty*cart[itemCode].price;
      setCartPrice(totalPrice);
    }
    if(newCart[itemCode].qty<=0){
      delete newCart[itemCode];
    }

    setCart(newCart);
    saveCart(newCart);

  }

  const removeFromCart=(itemCode)=>{

    let newCart=cart;
    let totalPrice=cartPrice-cart[itemCode].subtotal;
    setCartPrice(totalPrice);
    delete newCart[itemCode];

    setCart(newCart);
    saveCart(newCart);

  }

  return <>
  <Navbar cart={cart} addToCart={addToCart} reduceItemQuantityFromCart={reduceItemQuantityFromCart} removeFromCart={removeFromCart} clearCart={clearCart} cartPrice={cartPrice}/>
  <Component cart={cart} addToCart={addToCart} reduceItemQuantityFromCart={reduceItemQuantityFromCart} removeFromCart={removeFromCart} clearCart={clearCart} cartPrice={cartPrice} {...pageProps} />
  <Footer/>
  </>
}
