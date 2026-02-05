export default function AddToCart({item}) {
  return (
    <li className="cart-item">
      <figure>{item.image}</figure>
      <h3>{item.name}</h3>
      <button>-</button><button>+</button>
    </li>
  );
}