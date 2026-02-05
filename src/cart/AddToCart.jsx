export default function AddToCart({plant}) {
  return (
    <li className="cart-item">
      <figure>{plant.image}</figure>
      <h3>{plant.name}</h3>
    </li>
  );
}