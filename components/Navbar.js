import React from 'react'
import { BsFillCartFill } from 'react-icons/bs';
import { AiOutlineCloseCircle, AiFillCloseCircle,AiFillPlusCircle,AiFillMinusCircle } from 'react-icons/ai';
import Link from 'next/link'
import { useRef } from 'react';

const Navbar = () => {

    const ref=useRef();

    const toggleCart=()=>{

        console.log("Inside toggle cart");
        console.log(ref.current);
        console.log(ref.current.classList);

        if(ref.current.classList.contains('translate-x-full')){
            ref.current.classList.remove('translate-x-full');
            ref.current.classList.add('translate-x-0');
        }

        else if(ref.current.classList.contains('translate-x-0')){
            ref.current.classList.remove('translate-x-0');
            ref.current.classList.add('translate-x-full');
        }
    }


    return (
        <div>
            <header className="text-cyan-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-cyan-900 mb-4 md:mb-0">

                        <span className="ml-3 text-xl">EBuy</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-cyan-400	flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 hover:text-cyan-900" href={'/'}>Home</Link>
                        <Link className="mr-5 hover:text-cyan-900" href={'/tshirts'}>Tshirts</Link>
                        <Link className="mr-5 hover:text-cyan-900" href={'/sneakers'}>Sneakers</Link>
                        <Link className="mr-5 hover:text-cyan-900" href={'/watches'}>Watches</Link>
                    </nav>

                    <div className="inline-flex items-center cursor: pointer py-1 px-3 focus:outline-none text-base mt-4 md:mt-0 z-0">
                        <BsFillCartFill className='text-xl mr-3 cursor-pointer' onClick={toggleCart} />
                        <button className="inline-flex items-center bg-cyan-100 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-200 rounded text-base mt-4  md:mt-0">Login
                        </button>
                    </div >

                    <div ref={ref} className='flex flex-col items-center justify-start sideCart absolute top-0 right-0 w-[50vw] h-screen bg-cyan-100 z-10 text-2xl transition-transform translate-x-full'>

                        <h2 className='text-4xl font-bold text-cyan-700 italic mt-4 '>Shopping Cart</h2>
                        <AiOutlineCloseCircle className='absolute top-5 right-5 cursor-pointer' onClick={toggleCart} />

                        <div className='flex flex-col items-center justify-start border w-[90%] rounded m-5 h-3/5 bg-white overflow-y-auto no-scrollbar'>

                            <div className='w-full bg-pink-300 flex items-center justify-center'>
                                <h2 className='w-[40%] bg-cyan-900 text-white text-center italic'>Products</h2>
                                <h2 className='w-[20%] bg-cyan-900 text-white text-center italic'>Price</h2>
                                <h2 className='w-[20%] bg-cyan-900 text-white text-center italic'>Qunatity</h2>
                                <h2 className='w-[20%] bg-cyan-900 text-white text-center italic'>Subtotal</h2>

                            </div>


                            <div className='h-1/3 w-full bg-white flex items-center justify-center'>
                                
                                <div className='flex items-center justify-start w-[40%] h-full border'>
                                    <AiFillCloseCircle className='cursor-pointer text-lg ml-2' />
                                    <span className='text-lg ml-4'>Summer Tshirt</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                <AiFillPlusCircle className='cursor-pointer text-lg mx-1' />
                                    <span className='text-lg mx-1'>1</span>
                                    <AiFillMinusCircle className='cursor-pointer text-lg mx-1' />
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>
                            </div>

                            <div className='h-1/3 w-full bg-white flex items-center justify-center'>
                                
                                <div className='flex items-center justify-start w-[40%] h-full border'>
                                    <AiFillCloseCircle className='cursor-pointer text-lg ml-2' />
                                    <span className='text-lg ml-4'>Summer Tshirt</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                <AiFillPlusCircle className='cursor-pointer text-lg mx-1' />
                                    <span className='text-lg mx-1'>1</span>
                                    <AiFillMinusCircle className='cursor-pointer text-lg mx-1' />
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>
                            </div>

                            <div className='h-1/3 w-full bg-white flex items-center justify-center'>
                                
                                <div className='flex items-center justify-start w-[40%] h-full border'>
                                    <AiFillCloseCircle className='cursor-pointer text-lg ml-2' />
                                    <span className='text-lg ml-4'>Summer Tshirt</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                <AiFillPlusCircle className='cursor-pointer text-lg mx-1' />
                                    <span className='text-lg mx-1'>1</span>
                                    <AiFillMinusCircle className='cursor-pointer text-lg mx-1' />
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>
                            </div>

                            <div className='h-1/3 w-full bg-white flex items-center justify-center'>
                                
                                <div className='flex items-center justify-start w-[40%] h-full border'>
                                    <AiFillCloseCircle className='cursor-pointer text-lg ml-2' />
                                    <span className='text-lg ml-4'>Summer Tshirt</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                <AiFillPlusCircle className='cursor-pointer text-lg mx-1' />
                                    <span className='text-lg mx-1'>1</span>
                                    <AiFillMinusCircle className='cursor-pointer text-lg mx-1' />
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>
                            </div>

                            <div className='h-1/3 w-full bg-white flex items-center justify-center'>
                                
                                <div className='flex items-center justify-start w-[40%] h-full border'>
                                    <AiFillCloseCircle className='cursor-pointer text-lg ml-2' />
                                    <span className='text-lg ml-4'>Summer Tshirt</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                <AiFillPlusCircle className='cursor-pointer text-lg mx-1' />
                                    <span className='text-lg mx-1'>1</span>
                                    <AiFillMinusCircle className='cursor-pointer text-lg mx-1' />
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>
                            </div>

                            <div className='h-1/3 w-full bg-white flex items-center justify-center'>
                                
                                <div className='flex items-center justify-start w-[40%] h-full border'>
                                    <AiFillCloseCircle className='cursor-pointer text-lg ml-2' />
                                    <span className='text-lg ml-4'>Summer Tshirt</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                <AiFillPlusCircle className='cursor-pointer text-lg mx-1' />
                                    <span className='text-lg mx-1'>1</span>
                                    <AiFillMinusCircle className='cursor-pointer text-lg mx-1' />
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>
                            </div>

                            <div className='h-1/3 w-full bg-white flex items-center justify-center'>
                                
                                <div className='flex items-center justify-start w-[40%] h-full border'>
                                    <AiFillCloseCircle className='cursor-pointer text-lg ml-2' />
                                    <span className='text-lg ml-4'>Summer Tshirt</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                <AiFillPlusCircle className='cursor-pointer text-lg mx-1' />
                                    <span className='text-lg mx-1'>1</span>
                                    <AiFillMinusCircle className='cursor-pointer text-lg mx-1' />
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>
                            </div>

                            <div className='h-1/3 w-full bg-white flex items-center justify-center'>
                                
                                <div className='flex items-center justify-start w-[40%] h-full border'>
                                    <AiFillCloseCircle className='cursor-pointer text-lg ml-2' />
                                    <span className='text-lg ml-4'>Summer Tshirt</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                <AiFillPlusCircle className='cursor-pointer text-lg mx-1' />
                                    <span className='text-lg mx-1'>1</span>
                                    <AiFillMinusCircle className='cursor-pointer text-lg mx-1' />
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>
                            </div>

                            <div className='h-1/3 w-full bg-white flex items-center justify-center'>
                                
                                <div className='flex items-center justify-start w-[40%] h-full border'>
                                    <AiFillCloseCircle className='cursor-pointer text-lg ml-2' />
                                    <span className='text-lg ml-4'>Summer Tshirt</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                <AiFillPlusCircle className='cursor-pointer text-lg mx-1' />
                                    <span className='text-lg mx-1'>1</span>
                                    <AiFillMinusCircle className='cursor-pointer text-lg mx-1' />
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>
                            </div>

                            <div className='h-1/3 w-full bg-white flex items-center justify-center'>
                                
                                <div className='flex items-center justify-start w-[40%] h-full border'>
                                    <AiFillCloseCircle className='cursor-pointer text-lg ml-2' />
                                    <span className='text-lg ml-4'>Summer Tshirt</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                <AiFillPlusCircle className='cursor-pointer text-lg mx-1' />
                                    <span className='text-lg mx-1'>1</span>
                                    <AiFillMinusCircle className='cursor-pointer text-lg mx-1' />
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>
                            </div>

                            <div className='h-1/3 w-full bg-white flex items-center justify-center'>
                                
                                <div className='flex items-center justify-start w-[40%] h-full border'>
                                    <AiFillCloseCircle className='cursor-pointer text-lg ml-2' />
                                    <span className='text-lg ml-4'>Summer Tshirt</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                <AiFillPlusCircle className='cursor-pointer text-lg mx-1' />
                                    <span className='text-lg mx-1'>1</span>
                                    <AiFillMinusCircle className='cursor-pointer text-lg mx-1' />
                                </div>

                                <div className='flex items-center justify-center w-[20%] h-full border'>
                                    <span className='text-lg ml-4'>₹499.00</span>
                                </div>
                            </div>

                            

                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar