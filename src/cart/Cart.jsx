/** Creates a Cart section */
export default function Cart({cart}) {
    if (cart.length === 0) {
    <section>
      <h2>Cart</h2>
      <p>Your cart is empty!</p>
    </section>
    };
  return (
    <section>
      <h2>Cart</h2>
    </section>
  );
}