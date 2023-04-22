import "./ItemListContainer.scss";

export const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="list_container">
      <h2> Listado de productos</h2>
      <hr />
      <p>{mensaje}</p>
    </div>
  );
};
