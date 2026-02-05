import { useState } from "react";
import PLANTS from "./data";
import Plants from "./plants/Plants";
import Cart from "./cart/Cart";


export default function App() {
  
  return (
  <>
    <header>
      <h1>Proper Plants</h1>
    </header>
    <main>
      <Plants plants={PLANTS} />
      <Cart cart="" />
    </main>
  </>
  );
}
