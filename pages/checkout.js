import React from 'react'
import {  AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import Link from 'next/link'

const Checkout = ({cart,addToCart,removeFromCart,cartPrice,reduceItemQuantityFromCart}) => {
  return (
    <>
    <div className="mt-20">
    <h1 className="flex items-center justify-center font-bold text-teal-900 text-md lg:text-3xl">Checkout</h1>
</div>
<div className="container p-8 md:p-12 mx-auto">
    <div className="flex flex-col w-full px-0 mx-auto lg:flex-row">
        <div className="flex flex-col lg:w-1/2">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address
            </h2>
            <form className="justify-center w-full mx-auto" method="post" action>
                <div className="">
                    <div className="space-x-0 lg:flex lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <label for="firstName" className="block mb-3 text-sm font-semibold text-teal-500">First
                                Name</label>
                            <input name="firstName" type="text" placeholder="First Name"
                                className="w-full px-4 py-3 text-sm border border-teal-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-teal-600"/>
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label for="firstName" className="block mb-3 text-sm font-semibold text-teal-500">Last
                                Name</label>
                            <input name="Last Name" type="text" placeholder="Last Name"
                                className="w-full px-4 py-3 text-sm border border-teal-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-teal-600"/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="w-full">
                            <label for="Email"
                                className="block mb-3 text-sm font-semibold text-teal-500">Email</label>
                            <input name="Last Name" type="text" placeholder="Email"
                                className="w-full px-4 py-3 text-sm border border-teal-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-teal-600"/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="w-full">
                            <label for="Address"
                                className="block mb-3 text-sm font-semibold text-teal-500">Address</label>
                            <textarea
                                className="w-full px-4 py-3 text-xs border border-teal-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-teal-600"
                                name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                        </div>
                    </div>
                    <div className="space-x-0 lg:flex lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <label for="city"
                                className="block mb-3 text-sm font-semibold text-teal-500">City</label>
                            <input name="city" type="text" placeholder="City"
                                className="w-full px-4 py-3 text-sm border border-teal-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-teal-600"/>
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label for="postcode" className="block mb-3 text-sm font-semibold text-teal-500">
                                Postcode</label>
                            <input name="postcode" type="text" placeholder="Post Code"
                                className="w-full px-4 py-3 text-sm border border-teal-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-teal-600"/>
                        </div>
                    </div>
                    <div className="flex items-center mt-4">
                        <label className="flex items-center text-sm group text-heading">
                            <input type="checkbox"
                                className="w-5 h-5 border border-teal-300 rounded focus:outline-none focus:ring-1"/>
                            <span className="ml-2">Save this information for next time</span></label>
                    </div>
                    <div className="relative pt-3 xl:pt-6"><label for="note"
                            className="block mb-3 text-sm font-semibold text-teal-500"> Notes
                            (Optional)</label><textarea name="note"
                            className="flex items-center w-full px-4 py-3 text-sm border border-teal-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-600"
                            rows="4" placeholder="Notes for delivery"></textarea>
                    </div>
                    <div className="mt-4">
                        <button
                            className="w-full px-6 py-2 text-white bg-teal-600 hover:bg-teal-900">Proceed to Pay</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-1/2">
            <div className="pt-12 md:pt-0 2xl:ps-4">
                <h2 className="text-xl font-bold my-2">Order Summary
                </h2>
                <div className='flex flex-col items-center justify-start border w-full md:w-[90%] rounded md:m-5 h-3/5 bg-white overflow-y-auto no-scrollbar'>

                            <div className='w-full bg-pink-300 flex items-center justify-center'>
                                <h2 className='w-1/2 bg-teal-900 text-white text-center italic'>Products</h2>
                              
                                <h2 className='w-1/4 bg-teal-900 text-white text-center italic'>Quantity</h2>
                                <h2 className='w-1/4 bg-teal-900 text-white text-center italic'>Subtotal</h2>

                            </div>

                            {
                                Object.keys(cart).map((itemCode)=>{
                                    return  (

                                        <div key={itemCode} className='h-1/3 w-full bg-white flex items-center justify-center text-teal-700'>

                                            <div className='flex items-center justify-start w-1/2 h-full p-2'>
                                                <AiFillCloseCircle className='cursor-pointer text-lg ml-2' onClick={()=>{removeFromCart(itemCode)}} />
                                                <span className='text-sm md:text-lg ml-4'>{cart[itemCode].name}</span>
                                            </div>

                                            <div className='flex items-center justify-center w-1/4 h-full p-2'>
                                                <AiFillPlusCircle className='cursor-pointer text-lg mx-1' onClick={()=>{addToCart(itemCode,1,cart[itemCode].price,cart[itemCode].name,cart[itemCode].size,cart[itemCode].variant)}} />
                                                <span className='text-sm md:text-lg mx-1'>{cart[itemCode].qty}</span>
                                                <AiFillMinusCircle className='cursor-pointer text-lg mx-1' onClick={()=>{reduceItemQuantityFromCart(itemCode,1)}} />
                                            </div>

                                            <div className='flex items-center justify-center w-1/4 h-full p-2'>
                                                <span className='text-sm md:text-lg ml-4'>₹{cart[itemCode].subtotal}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                        <div className='flex items-center justify-between border w-[90%] rounded m-5 bg-white p-3 text-teal-700'>
                            <span className=''>Order Total</span>
                            <span>₹{cartPrice}</span>  
                        </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default Checkout