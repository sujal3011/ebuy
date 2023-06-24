import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'

export default function App({ Component, pageProps }) {

  const [cart, setCart] = useState({});
  const [cartPrice, setCartPrice] = useState(0);
  const [usertoken, setUsertoken] = useState(null);
  const [progress, setProgress] = useState(0);


  const router = useRouter()

  useEffect(()=>{
    router.events.on('routeChangeStart',()=>{
      setProgress(40);
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100);
    })
    try {
      console.log(router.query);
      console.log("Inside useeffect");

      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")));
        setCartPrice(JSON.parse(localStorage.getItem("total_price")));
      }


      const token=localStorage.getItem("token");
      if(token){
        setUsertoken(token);
      }
      
    } catch (error) {
      console.error(error);
      localStorage.clear();
    } 

  },[router.query]);

  const saveCart=(newCart)=>{
    localStorage.setItem("cart",JSON.stringify(newCart));
    let keys=Object.keys(cart);
    let totalPrice=0;
    for(let i=0;i<keys.length;i++){
      totalPrice+=cart[keys[i]].subtotal;
    }
    setCartPrice(totalPrice);
    localStorage.setItem("total_price",JSON.stringify(totalPrice));


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
    setCartPrice(0);
    localStorage.removeItem("total_price");
    localStorage.removeItem("cart");
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

  const logout=()=>{
    localStorage.removeItem("token");
    setUsertoken(null);

  }

  return <div className='overflow-x-hidden'>

  <LoadingBar color='#dc2626' progress={progress} waitingTime={500} loaderSpeed={300} height={4} onLoaderFinished={() => setProgress(0)}/>
  <Navbar cart={cart} usertoken={usertoken} logout={logout} addToCart={addToCart} reduceItemQuantityFromCart={reduceItemQuantityFromCart} removeFromCart={removeFromCart} clearCart={clearCart} cartPrice={cartPrice}/>
  <Component cart={cart} usertoken={usertoken} logout={logout} addToCart={addToCart} reduceItemQuantityFromCart={reduceItemQuantityFromCart} removeFromCart={removeFromCart} clearCart={clearCart} cartPrice={cartPrice} {...pageProps} />
  <Footer/>
  </div>
}
