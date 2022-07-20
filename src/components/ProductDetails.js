// @ts-nocheck
import React from "react";

import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import Button from "./Button";
import { sneaker } from "../uitls/data";

const ProductDetails = ({ setCounter, counter, setSavedCount }) => {
  const deductCount = () =>
    setCounter((prevCount) => (counter === 0 ? 0 : prevCount - 1));

  const addCount = () => setCounter((prevCount) => prevCount + 1);

  return (
    <>
      {sneaker.map((item, id) => {
        return (
          <div key={id} className="px-6 py-4 pb-20 lg:max-w-lg">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-primary lg:mb-6">
              {item.brand}
            </span>
            <h1 className="mb-4 text-3xl font-bold text-tertiary md:text-4xl lg:mb-10 lg:text-5xl">
              {item.productName}
            </h1>

            <p className="mb-6 max-w-md text-tertiary-light">
              {item.description}
            </p>
            <div className="mb-5 flex items-center justify-between md:justify-start md:gap-8 lg:mb-8 lg:flex-col lg:items-start lg:gap-2">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">
                  ${item.discountPrice}.00
                </span>
                <span className="rounded-md bg-secondary px-2 font-bold text-primary">
                  {item.discount}%
                </span>
              </div>
              <span className="font-bold text-tertiary-dark">
                <s>${item.initialPrice}.00</s>
              </span>
            </div>
            <div className="space-y-4 md:flex md:items-center md:gap-4 md:space-y-0">
              <div className="flex w-full items-center justify-between rounded-lg bg-secondary-dark p-3 md:basis-8/12 ">
                <button
                  type="button"
                  onClick={deductCount}
                  className="p-3 transition-all duration-300 hover:opacity-50 lg:px-1"
                >
                  <img src={minusIcon} alt="minus" />
                </button>

                <span className="font-bold">{counter}</span>

                <button
                  type="button"
                  onClick={addCount}
                  className="p-3 transition-all duration-300 hover:opacity-50 lg:px-1"
                >
                  <img src={plusIcon} alt="plus" />
                </button>
              </div>

              <Button handleClick={() => setSavedCount(counter)}>
                <svg
                  width="21"
                  height="22"
                  xmlns="http://www.w3.org/2000/svg"
                  className="scale-75 fill-white"
                >
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fillRule="nonzero"
                  />
                </svg>
                <span>Add to cart</span>
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductDetails;
