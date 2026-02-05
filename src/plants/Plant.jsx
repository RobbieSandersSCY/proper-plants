import AddToCart from "../cart/AddToCart";

export default function Plant( {plant} ) {
  return (
  <>
    <li className="plant">
      <figure>{plant.image}</figure>
      <h3>{plant.name}</h3>
      <button
       onClick={()=> AddToCart({plant})}
      >
        Add to Cart
      </button>
    </li>
  </>
  );
}