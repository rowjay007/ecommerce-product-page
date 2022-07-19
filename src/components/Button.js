import React from "react";

const Button = ({ children, handleClick }) =>{
  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary p-4 font-bold text-white shadow-lg shadow-primary/50 transition-all duration-300 hover:bg-primary/50 "
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button
