import React, { useState } from "react";
import Cart from "./Cart";
import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import closeIcon from "../assets/images/icon-close.svg";

const Navbar = ({ savedCount, setSavedCount }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Collections", "Men", "Women", "About", "Contact"];
  const navItemsDisplay = navItems.map((item) => (
    <li
      key={item}
      className="lg:border-b-4 lg:border-transparent lg:py-10 lg:transition-all lg:duration-300 lg:hover:cursor-pointer lg:hover:border-b-4 lg:hover:border-primary lg:hover:text-tertiary"
    >
      {item}
    </li>
  ));

  return (
    <nav className="flex w-full items-center gap-4 bg-white px-6 py-4 lg:gap-0 lg:border-b-2 lg:border-secondary-dark lg:px-0 lg:pt-6 lg:pb-0">
      {isMenuOpen ? (
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="z-30"
          aria-label="Close"
        >
          <img src={closeIcon} alt="close" className="mt-1.5 w-4 lg:hidden" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="z-30"
          aria-label="Hamburger"
        >
          <img
            src={menuIcon}
            alt="hamburger"
            className="mt-1.5 w-4 lg:hidden"
          />
        </button>
      )}

      {isMenuOpen && (
        <div className="absolute top-0 left-0 z-20 min-h-full w-full bg-black/70">
          <ul className="absolute top-0 left-0 min-h-full w-8/12 space-y-4 bg-white p-7 pt-20 text-lg font-bold md:w-1/3">
            {navItemsDisplay}
          </ul>
        </div>
      )}

      <img src={logo} alt="sneaker" className="mr-auto md:mx-0" />

      <div className="mr-auto lg:ml-12">
        <ul className="hidden  text-tertiary-light lg:flex lg:gap-6">
          {navItemsDisplay}
        </ul>
      </div>

      <div className="flex items-center gap-4 lg:gap-8">
        <div className="relative">
          <button type="button" onClick={() => setIsCartOpen(!isCartOpen)}>
            <img src={cartIcon} alt="cart" className="w-6" />
          </button>

          {savedCount > 0 && (
            <span className="absolute -top-1 -right-1.5 inline-block rounded-full bg-primary px-2 text-center text-[8px] text-white">
              {savedCount}
            </span>
          )}
        </div>

        <img
          src={avatar}
          alt="avatar"
          className="w-6 rounded-full hover:cursor-pointer hover:outline hover:outline-1 hover:outline-primary md:w-10 lg:w-12"
        />
      </div>

      {isCartOpen && (
        <Cart savedCount={savedCount} setSavedCount={setSavedCount} />
      )}
    </nav>
  );
};

export default Navbar;
