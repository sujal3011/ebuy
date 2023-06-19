import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const tshirts = ({ products }) => {
    console.log(products);
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 md:px-0 py-24 mx-auto">
                    <div className="flex flex-wrap justify-center items-center m-4">

                        {
                            Object.keys(products).map((key) => {
                                return (

                                    <div key={products[key]._id} className="lg:w-1/5 md:w-[47%] p-4 w-full border rounded shadow-lg mx-2 my-2 h-[66vh] md:h-[90vh]">
                                        <Link href={`/products/${products[key].slug}`}>
                                            <div className="block relative h-[47vh] md:h-[56vh] rounded overflow-hidden ">
                                                <Image alt="ecommerce" className="object-cover object-top w-full h-full block" src="/images/men-tshirt.jpg" fill={true} />
                                            </div>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[key].category}</h3>
                                                <h2 className="text-gray-900 title-font text-lg font-medium">{products[key].title}</h2>
                                                <p className="mt-1">₹{products[key].price}</p>

                                                <div className='w-full flex items-center justify-start mt-1'>
                                                    { products[key].size.includes('S') &&  <span className='border p-2 mr-1'>S</span>}
                                                    { products[key].size.includes('M') &&  <span className='border p-2 mr-1'>M</span>}
                                                    { products[key].size.includes('L') &&  <span className='border p-2 mx-1'>L</span>}
                                                    { products[key].size.includes('XL') &&  <span className='border p-2 mr-1'>XL</span>}
                                                </div>

                                                <div className='w-full flex items-center justify-start mt-1'>
                                                    {
                                                        products[key].color.map((color)=>{
                                                            return (
                                                                <div key={color} className={`rounded-full mr-1 bg-${color}-500 w-6 h-6`}></div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export async function getServerSideProps(context) {

    const res = await fetch(`http://localhost:3000/api/products/getproducts?category=tshirt`);
    const json = await res.json();
    const all_products = json.all_products;
    let products={};
    for(let item of all_products){
        if(item.title in products){

            if(!products[item.title].color.includes(item.color) && item.availableQty > 0){
                products[item.title].color.push(item.color);
            }
            if(!products[item.title].size.includes(item.size) && item.availableQty > 0){
                products[item.title].size.push(item.size);
            }

        }
        else{
            products[item.title]=JSON.parse(JSON.stringify(item));
            if(item.availableQty > 0){
                products[item.title].color=[item.color];
                products[item.title].size=[item.size];
            }
        }
    }
    return {
        props: {products},
    }
}

export default tshirts