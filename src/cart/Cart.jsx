import CartItem from "./CartItem";

/** Creates a Cart section */
export default function Cart({cart, addToCart}) {
    {if (cart.length === 0) {
    <section>
      <h2>Cart</h2>
      <p>Your cart is empty!</p>
    </section>
    };
  return (
    <section>
      <h2>Cart</h2>
      <ul className="cart">
        {cart.map((item) => (
          <CartItem 
          key={item.id} 
          item={item} 
          addToCart = {addToCart}
          />))}
      </ul>
    </section>
  );
};
}