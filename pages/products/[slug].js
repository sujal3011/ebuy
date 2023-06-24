import {Product} from '@/models/Product';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import mongoose from 'mongoose';

export default function Page({ addToCart, product, variants }) {
  console.log(product);
  console.log(variants);
  const router = useRouter();
  const { slug } = router.query

  const [pincode, setPincode] = useState();
  const [pinservice, setPinservice] = useState(null);

  const [size, setSize] = useState(product.size);
  const [color, setColor] = useState(product.color);

  const handlePinChange = (e) => {
    setPincode(e.target.value);
  }

  const handlePinCheck = async () => {
    const response = await fetch('http://localhost:3000/api/pincode');
    const pincodes = await response.json();
    console.log(pincodes);
    console.log(parseInt(pincode));
    if (pincodes.includes(parseInt(pincode))) {
      console.log("Pincode found");
      setPinservice(true);
      console.log(pinservice);
    }
    else {
      console.log("Pincode not found");
      setPinservice(false);
    }
    console.log(pinservice);
  }

  const refreshVariant = (newcolor, newsize) => {
    console.log(newcolor);
    console.log(newsize);
    if (newsize in variants[newcolor]) {

      const url = `http://localhost:3000/products/${variants[newcolor][newsize]['slug']}`;
      window.location = url;
    }
  }

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">

            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto object-cover object-top rounded px-20" src={product.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}/{product.color}/{product.size}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-cyan-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-cyan-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-cyan-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-cyan-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-cyan-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed mb-2">{product.desc}.</p>
              <span className="title-font font-medium text-2xl text-gray-900 my-2">${product.price}</span>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">


                <div className="flex">
                  <span className="mr-3">Color</span>

                  {
                    Object.keys(variants).map((currColor) => {
                      return (

                        <button key={currColor} className={`border-2 ${color === currColor ? "border-gray-800" : "border-gray-300"} rounded-full w-6 h-6 focus:outline-none } `} style={{ backgroundColor: currColor, }} onClick={() => {
                          refreshVariant(currColor, size);
                          setColor(currColor);
                        }}></button>

                      );
                    })
                  }
                </div>

                {
                  (product.category === "tshirt") && <div className="flex ml-6 items-center">
                    <span className="mr-3">Sizes</span>
                    <div className="relative">
                      {Object.keys(variants[color]).includes('S') && <span className={`border ${size == 'S' ? "border-gray-800" : "border-gray-400"} p-2 mx-2 cursor-pointer`} onClick={() => {
                        setSize('S');
                        refreshVariant(color, 'S');
                      }}>S</span>}

                      {Object.keys(variants[color]).includes('M') && <span className={`border ${size == 'M' ? "border-gray-800" : "border-gray-400"} p-2 mx-2 cursor-pointer`} onClick={() => {
                        setSize('M');
                        refreshVariant(color, 'M');
                      }}>M</span>}
                      {Object.keys(variants[color]).includes('L') && <span className={`border ${size == 'L' ? "border-gray-800" : "border-gray-400"} p-2 mx-2 cursor-pointer`} onClick={() => {
                        setSize('L');
                        refreshVariant(color, 'L');
                      }}>L</span>}
                      {Object.keys(variants[color]).includes('XL') && <span className={`border ${size == 'XL' ? "border-gray-800" : "border-gray-400"} p-2 mx-2 cursor-pointer`} onClick={() => {
                        setSize('XL');
                        refreshVariant(color, 'XL');
                      }}>XL</span>}
                    </div>
                  </div>

                }


                {
                  (product.category === "sneaker") && <div className="flex ml-6 items-center">
                    <span className="mr-3">Sizes</span>
                    <div className="relative">
                      {Object.keys(variants[color]).includes('6') && <span className={`border ${size == '6' ? "border-gray-800" : "border-gray-400"} p-2 mx-2 cursor-pointer`} onClick={() => {
                        setSize('6');
                        refreshVariant(color, '6');
                      }}>6</span>}

                      {Object.keys(variants[color]).includes('7') && <span className={`border ${size == '7' ? "border-gray-800" : "border-gray-400"} p-2 mx-2 cursor-pointer`} onClick={() => {
                        setSize('7');
                        refreshVariant(color, '7');
                      }}>7</span>}
                      {Object.keys(variants[color]).includes('8') && <span className={`border ${size == '8' ? "border-gray-800" : "border-gray-400"} p-2 mx-2 cursor-pointer`} onClick={() => {
                        setSize('8');
                        refreshVariant(color, '8');
                      }}>8</span>}
                      {Object.keys(variants[color]).includes('9') && <span className={`border ${size == '9' ? "border-gray-800" : "border-gray-400"} p-2 mx-2 cursor-pointer`} onClick={() => {
                        setSize('9');
                        refreshVariant(color, '9');
                      }}>9</span>}

                      {Object.keys(variants[color]).includes('10') && <span className={`border ${size == '10' ? "border-gray-800" : "border-gray-400"} p-2 mx-2 cursor-pointer`} onClick={() => {
                        setSize('10');
                        refreshVariant(color, '10');
                      }}>10</span>}
                    </div>
                  </div>

                }


              </div>
              <div className="flex justify-start">

                <button className="flex mx-2 text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded" onClick={() => { addToCart(slug, 1, product.price, product.title, product.size, product.color) }}>Add to Cart</button>
                <button className="flex mx-2 text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded">Buy Now</button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>

              <div className='flex items-center justify-center mt-4 w-full md:w-1/2 lg:w-full'>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter destination pincode" onChange={handlePinChange} />
                <button className="flex mx-2 text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded" onClick={handlePinCheck}>Check</button>
              </div>

              <div className='flexitems-center justify-center mt-4 w-full md:w-1/2 lg:w-full'>

                {
                  (!pinservice && pinservice !== null) && <span className='text-red-500 w-full'>destination pincode not available</span>
                }
                {
                  (pinservice && pinservice !== null) && <span className='text-green-500 w-full'>destination pincode available</span>
                }
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL);
  }

  let product = await Product.findOne({ slug: context.query.slug });
  let variants = await Product.find({ title: product.title, category: product.category });
  let colorToSize = {};


  // {
  //   color1 : 
  //     {
  //       size1:  {slug:'....'},
  //       size2:  {slug:'....'},
  //       size3:  {slug:'....'},
  //     },
  //   color1 : 
  //     {
  //       size1:  {slug:'....'},
  //       size2:  {slug:'....'},
  //       size3:  {slug:'....'},
  //     },

  // }


  for (let item of variants) {
    if (Object.keys(colorToSize).includes(item.color)) {
      colorToSize[item.color][item.size] = { slug: item.slug };
    }
    else {
      colorToSize[item.color] = {};
      colorToSize[item.color][item.size] = { slug: item.slug };
    }
  }



  return {
    props: { product: JSON.parse(JSON.stringify(product)), variants: JSON.parse(JSON.stringify(colorToSize)) },
  }
}