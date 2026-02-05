import Plant from "./Plant";


/** Creates a  */
export default function Plants({ plants }) {
  return (
    <section>
      <h2>Plants</h2>
      <ul className="plants">
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} />))}
      </ul>
    </section>
  );
}