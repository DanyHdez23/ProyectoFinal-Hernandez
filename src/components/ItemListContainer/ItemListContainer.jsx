import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { productos } from "../../data/productos";
import "../ItemListContainer/styles.css";
import { collection } from "firebase/firestore";
import { db } from "../../main";
import { getDocs } from "firebase/firestore";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  /** useEffect(() => {
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
  }, []); **/

  useEffect (() => {
    
    const productosRef = collection (db, "productos");
    getDocs(productosRef)
    .then((resp) => {
      
      setItems (
        resp.docs.map ((doc) => {
          return { ...doc.data(), id: doc.id}
          
        })
      )
    }
    )
  }, [])



  return (
    <div className="container">
      {items.length === 0 ? <h2>Cargando productos...</h2> : <ItemList items={items} />}
    </div>
  );
}

export default ItemListContainer;
