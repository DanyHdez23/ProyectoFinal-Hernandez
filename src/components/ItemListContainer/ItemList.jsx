import Item from "./Item";
import { useState } from "react";
import { Link } from "react-router-dom";

const categorias = {
  ACCESORIOS: "Accesorios",
  JUGUETES: "Juguetes",
  HIGIENE: "Higiene",
};

function ItemList({ items }) {

    const [selectedCategory, setSelectedCategory] = useState("");

    // se usa un ternario para mapear y solo guardar los que tengan la categoria
    const filteredItems = selectedCategory ? items.filter(item=>item.categoria === selectedCategory) :items;




    return (
      <div>
        <div> 
          <h2>Categorías</h2>
        <button onClick={() => setSelectedCategory(categorias.ACCESORIOS)}> Accesorios </button>
          <button onClick={() => setSelectedCategory(categorias.JUGUETES)}> Juguetes </button>
          <button onClick={() => setSelectedCategory(categorias.HIGIENE)}> Higiene </button>
        </div>

      <div className="card-container">
      {filteredItems.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.nombre}</h3>
            <p>Precio: ${item.precio}</p>
            <p>{item.descripcion}</p>
            <Link to={`/productos/${item.id}`}>
              <button className="btn-ver-producto">Ver Producto</button>
            </Link>
          </div>
        ))}
      </div>
        
      </div>
    );
  }
  
  export default ItemList;
  
  
