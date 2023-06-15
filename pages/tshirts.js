import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const tshirts = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 md:px-0 py-24 mx-auto">
                    <div className="flex flex-wrap justify-center items-center m-4">

                    <div className="lg:w-1/5 md:w-[47%] p-4 w-full border rounded shadow-lg mx-2 my-2 h-[66vh] md:h-[75vh]">
                        <Link href={'/products/this-is-a-slug'}>
                            <div className="block relative h-[47vh] md:h-[56vh] rounded overflow-hidden ">
                                <Image alt="ecommerce" className="object-cover object-top w-full h-full block" src="/images/men-tshirt.jpg" fill={true} />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirt</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">London Hills</h2>
                                <p className="mt-1">₹499.00</p>
                            </div>
                        </Link>
                    </div>

                    <div className="lg:w-1/5 md:w-[47%] p-4 w-full border rounded shadow-lg mx-2 my-2 h-[66vh] md:h-[75vh]">
                        <Link href={'/products/this-is-a-slug'}>
                            <div className="block relative h-[47vh] md:h-[56vh] rounded overflow-hidden ">
                                <Image alt="ecommerce" className="object-cover object-top w-full h-full block" src="/images/men-tshirt.jpg" fill={true} />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirt</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">London Hills</h2>
                                <p className="mt-1">₹499.00</p>
                            </div>
                        </Link>
                    </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default tshirts