import React from "react";

import deleteIcon from "../assets/images/icon-delete.svg";
import Button from "./Button";
const Cart = ({ savedCount, setSavedCount }) => {
  return (
    <div className="absolute top-[70px] left-1/2 z-10 w-[95%] max-w-md -translate-x-1/2 rounded-lg bg-white shadow-2xl shadow-tertiary/70 md:right-0 md:top-20 md:-translate-x-16 lg:top-28 lg:right-0 lg:w-96 lg:translate-x-56">
      <span className="border-secondary-dark-dark block border-b border-solid p-6 font-bold">
        Cart
      </span>

      <div className={`w-full ${!savedCount ? "py-20" : "p-6"}`}>
        {!savedCount ? (
          <span className="inline-block w-full text-center font-bold text-tertiary-light">
            Your cart is empty
          </span>
        ) : (
          <div>
            <div className="mb-6 flex items-center gap-4">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#69707D"
                  fill-rule="nonzero"
                />
              </svg>
              {/* <img src={cartImage} alt="shoes" className="w-12 rounded-md" /> */}

              <div className="mr-auto flex flex-col font-bold text-tertiary-dark">
                <span>Fall Limited Edition...</span>
                <span className="font-normal">
                  $125.00 x {savedCount}{" "}
                  <span className="font-bold text-tertiary">
                    ${(125 * savedCount).toFixed(2)}
                  </span>
                </span>
              </div>

              <button type="button" onClick={() => setSavedCount(0)}>
                <img src={deleteIcon} alt="delete" />
              </button>
            </div>

            <Button>
              <span>Checkout</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
