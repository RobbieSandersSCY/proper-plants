export default function CartItem({item, addToCart, removeFromCart}) {
  return (
    <li className="cart-item">
      <figure>{item.image}</figure>
      <h3>{item.name}</h3>
      <button onClick={()=>removeFromCart({item})}>
        -
      </button>
      <button onClick={()=>addToCart({item})}>
        +
      </button>
    </li>
  );
}