import React from "react";
import product1 from ".././assets/images/image-product-1.jpg";
const ProductDetails = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={product1}
            />
            <div className="grid grid-cols-5 gap-4 mt-4">
              <img
                src={product1}
                className="w-full cursor-pointer border"
                alt=""
              />
              <img
                src={product1}
                className="w-full cursor-pointer border"
                alt=""
              />
              <img
                src={product1}
                className="w-full cursor-pointer border"
                alt=""
              />
              <img
                src={product1}
                className="w-full cursor-pointer border"
                alt=""
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                sneaker company
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                fall limited edition sneakers
              </h1>

              <p className="leading-relaxed">
                This low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
              </p>
              {/*  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div> */}
              <div className="flex">
                <div className="title-font font-medium text-2xl text-gray-900">
                  $58.00{" "}
                  <span className="title-font font-medium text-2xl text-gray-900">
                    50%
                  </span>
                </div>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
              </div>
              <div className="flex mt-3">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <button className="flex  ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container grid grid-cols-2 gap-6">
        <div>
          <img
            src={product1}
            className="w-full cursor-pointer border "
            alt=""
          />
          <div className="grid grid-cols-5 gap-4 mt-4">
            <img
              src={product1}
              className="w-full cursor-pointer border border-blue-300"
              alt=""
            />
            <img
              src={product1}
              className="w-full cursor-pointer border"
              alt=""
            />
            <img
              src={product1}
              className="w-full cursor-pointer border"
              alt=""
            />
            <img
              src={product1}
              className="w-full cursor-pointer border"
              alt=""
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-medium uppercase mb-2">test</h1>
          <div className="flex items-center mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              repudiandae dignissimos rem impedit quos placeat, asperiores optio
              quo voluptatibus quaerat labore ratione recusandae nemo aperiam
              pariatur, ab ipsum culpa sed?
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-sans">
            <p className="text-xl text-primary font-semibold">$55.00</p>
            <p className="text-sm text-gray-400 line-through">$55.00</p>
          </div>
          <div className="mt-4">
            <div className="text-sm border-gray-300 text-gray-600 divide-x divide-gray-300 w-max"></div>
            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
              -
            </div>
            <div className="h-8 w-8 text-base flex flex-center justify-center">
              3
            </div>
            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
              +
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
