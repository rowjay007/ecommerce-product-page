import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [counter, setCounter] = useState(0);
  const [savedCount, setSavedCount] = useState(0);
  return (
    <div className="relative min-h-screen bg-white lg:grid lg:grid-rows-[1fr_auto]">
      <div className="mx-auto max-w-6xl">
        <Navbar 
// @ts-ignore
        savedCount={savedCount} setSavedCount={setSavedCount} />

        <main className="lg:mt-20 lg:flex lg:items-center lg:justify-center lg:gap-24 lg:px-12">

          <ProductDetails
            // @ts-ignore
            count={counter}
            setCounter={setCounter}
            setSavedCount={setSavedCount}
          />
        </main>
      </div>

     
    </div>
  );
}

export default App;
