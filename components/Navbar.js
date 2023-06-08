import React from 'react'
import { BsFillCartFill } from 'react-icons/bs';
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <header className="text-cyan-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-cyan-900 mb-4 md:mb-0">
                       
                        <span className="ml-3 text-xl">EBuy</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-cyan-400	flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 hover:text-cyan-900" href={'/'}>Home</Link>
                        <Link className="mr-5 hover:text-cyan-900" href={'/men'}>Men's Wear</Link>
                        <Link className="mr-5 hover:text-cyan-900" href={'/women'}>Women's Wear</Link>
                        <Link className="mr-5 hover:text-cyan-900" href={'/kids'}>Kid's Wear</Link>
                    </nav>

                    <div className="inline-flex items-center cursor: pointer py-1 px-3 focus:outline-none text-base mt-4 md:mt-0">
                    <BsFillCartFill className='text-xl mr-3'/>
                    <button className="inline-flex items-center bg-cyan-100 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-200 rounded text-base mt-4  md:mt-0">Login
                    </button>
                    </div >
                       
                </div>
            </header>
        </div>
    )
}

export default Navbar