import React from 'react'

const Order = () => {
  return (
    <section className="text-teal-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h1 className="text-teal-900 text-3xl title-font font-medium mb-4 text-center">Order ID:33456677</h1>
          <div className="flex mb-4">
            <a className="flex-grow border-b-2 border-teal-300 py-2 text-lg px-1 text-center">Item</a>
            <a className="flex-grow border-b-2 border-teal-300 py-2 text-lg px-1 text-center">Quantity</a>
            <a className="flex-grow border-b-2 border-teal-300 py-2 text-lg px-1 text-center">Subtotal</a>
          </div>
          <div className="flex justify-center items-center border-t border-teal-200 py-2">
            <span className="text-teal-500 text-center w-1/3">Summer Tshirt</span>
            <span className=" text-teal-900 text-center w-1/3">2</span>
            <span className=" text-teal-900 text-center w-1/3">998</span>
          </div>
          <div className="flex justify-center items-center border-t border-teal-200 py-2">
            <span className="text-teal-500 text-center w-1/3">Summer Tshirt</span>
            <span className=" text-teal-900 text-center w-1/3">2</span>
            <span className=" text-teal-900 text-center w-1/3">998</span>
          </div>
          <div className="flex justify-center items-center border-t border-teal-200 py-2">
            <span className="text-teal-500 text-center w-1/3">Summer Tshirt</span>
            <span className=" text-teal-900 text-center w-1/3">2</span>
            <span className=" text-teal-900 text-center w-1/3">998</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="title-font font-medium text-2xl text-teal-900">Total : </span>
            <span className="title-font font-medium text-2xl text-teal-900">$58.00</span>
            <button className="flex ml-auto text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded">Track your Order</button>
          </div>
        </div>
        {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/> */}
      </div>
    </div>
  </section>
  )
}

export default Order