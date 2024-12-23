import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { productos } from "../../data/productos";
import "../ItemListContainer/styles.css";



function ItemListContainer() {
    const [items, setItems]=useState([]);
    
    useEffect(() => {
      const fetchproductos =new Promise((resolve) => {
        setTimeout(() => {
          resolve(productos)
        }, 2000)
      })


      fetchproductos.then((data) => {
        setItems(data)
      })
    },[])


  return (
    <div className="container">
        <ItemList items={items}/>

    </div>
  )
}

export default ItemListContainer;
