import React from 'react'
import { BsFillCartFill } from 'react-icons/bs';
import { AiOutlineCloseCircle, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link'
import { useRef } from 'react';

const Navbar = ({cart,addToCart,removeFromCart,clearCart,cartPrice,reduceItemQuantityFromCart}) => {

    const ref = useRef();

    const toggleCart = () => {

        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full');
            ref.current.classList.add('translate-x-0');
        }

        else if (ref.current.classList.contains('translate-x-0')) {
            ref.current.classList.remove('translate-x-0');
            ref.current.classList.add('translate-x-full');
        }
    }


    return (
            <header className="bg-cyan-900 text-white body-font sticky top-0 z-20">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href={'/'} className="flex title-font font-medium items-center text-cyan-900">

                        <span className="ml-3 text-xl text-white">EBuy</span>
                        
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-cyan-400	flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 hover:text-cyan-100" href={'/'}>Home</Link>
                        <Link className="mr-5 hover:text-cyan-100" href={'/tshirts'}>Tshirts</Link>
                        <Link className="mr-5 hover:text-cyan-100" href={'/sneakers'}>Sneakers</Link>
                        <Link className="mr-5 hover:text-cyan-100" href={'/jeans'}>Jeans</Link>
                    </nav>

                    <div className="inline-flex items-center cursor: pointer py-1 px-3 focus:outline-none text-base mt-2 md:mt-0 z-0">
                        <BsFillCartFill className='text-xl mr-3 cursor-pointer text-cyan-100' onClick={toggleCart} />
                        <Link href={"/login"}><CgProfile className="cursor-pointer text-2xl"/></Link>
                    </div >
                    
                    <div ref={ref} className='flex overflow-y-scroll flex-col items-center justify-start sideCart absolute top-0 right-0 w-[100vw] lg:w-[50vw] h-screen bg-cyan-100 z-10 text-2xl transition-transform translate-x-full'>

                        <h2 className='text-4xl font-bold text-cyan-700 italic mt-4 '>Shopping Cart</h2>
                        <AiOutlineCloseCircle className='absolute top-5 right-5 cursor-pointer text-cyan-900' onClick={toggleCart} />

                        <div className='flex flex-col items-center justify-start border w-[90%] rounded m-5 h-3/5 bg-white overflow-y-auto no-scrollbar'>

                            <div className='w-full bg-pink-300 flex items-center justify-center'>
                                <h2 className='w-[40%] bg-cyan-900 text-white text-center italic'>Products</h2>
                                <h2 className='w-[20%] bg-cyan-900 text-white text-center italic'>Price</h2>
                                <h2 className='w-[20%] bg-cyan-900 text-white text-center italic'>Quantity</h2>
                                <h2 className='w-[20%] bg-cyan-900 text-white text-center italic'>Subtotal</h2>

                            </div>

                            {
                                Object.keys(cart).map((itemCode)=>{
                                    return  (

                                        <div key={itemCode} className='h-1/3 w-full bg-white flex items-center justify-center text-cyan-700'>

                                            <div className='flex items-center justify-start w-[40%] h-full border'>
                                                <AiFillCloseCircle className='cursor-pointer text-lg ml-2' onClick={()=>{removeFromCart(itemCode)}} />
                                                <span className='text-lg ml-4'>{cart[itemCode].name}/{cart[itemCode].variant}/{cart[itemCode].size}</span>
                                            </div>

                                            <div className='flex items-center justify-center w-[20%] h-full border'>
                                                <span className='text-lg ml-4'>₹{cart[itemCode].price}</span>
                                            </div>

                                            <div className='flex items-center justify-center w-[20%] h-full border'>
                                                <AiFillPlusCircle className='cursor-pointer text-lg mx-1' onClick={()=>{addToCart(itemCode,1,cart[itemCode].price,cart[itemCode].name,cart[itemCode].size,cart[itemCode].variant)}} />
                                                <span className='text-lg mx-1'>{cart[itemCode].qty}</span>
                                                <AiFillMinusCircle className='cursor-pointer text-lg mx-1' onClick={()=>{reduceItemQuantityFromCart(itemCode,1)}} />
                                            </div>

                                            <div className='flex items-center justify-center w-[20%] h-full border'>
                                                <span className='text-lg ml-4'>₹{cart[itemCode].subtotal}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                        <div className='flex items-center justify-between border w-[90%] rounded m-5 bg-white p-3 text-cyan-700'>
                            <span className=''>Order Total</span>
                            <span>₹{cartPrice}</span>  
                        </div>

                        <div className="flex items-center justify-center">
                            <Link href={"/checkout"} className="flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-700 mx-2"  onClick={toggleCart}>Checkout</Link>
                            <button className="flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-700 mx-2" onClick={clearCart}>Clear Cart</button>
                        </div>
                    </div>
                </div>
            </header>
    )
}

export default Navbar