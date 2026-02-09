import Plant from "./Plant";

/** Creates a unordered list of objects using the Plant function */

export default function Plants({ plants, addToCart }) {
  return (
    <section>
      <h2>Plants</h2>
      <ul className="plants">
        {plants.map((plant) => (
          <Plant
            key={plant.id}
            plant={plant}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </section>
  );
}