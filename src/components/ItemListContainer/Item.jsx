import { Link } from "react-router-dom";

function Item({ nombre, precio, descripcion, id }) {
  return (
    <div className="card">
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
      <Link to={`/productos/${id}`}>
        <button className="btn-ver-producto">Ver más</button>
      </Link>
    </div>
  );
}

export default Item;
