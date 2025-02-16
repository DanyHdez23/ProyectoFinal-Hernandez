import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { productos } from "../../data/productos";
import "../ItemListContainer/styles.css";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Cargando productos...");
    const fetchProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });

    fetchProductos.then((data) => {
      console.log("Productos cargados:", data);
      setItems(data);
    });
  }, []);

  return (
    <div className="container">
      {items.length === 0 ? <h2>Cargando productos...</h2> : <ItemList items={items} />}
    </div>
  );
}

export default ItemListContainer;
