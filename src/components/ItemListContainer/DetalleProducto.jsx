import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../main";

function DetalleProducto() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    
    const docRef = doc(db, "productos", id);

    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          
          setItem({ ...snapshot.data(), id: snapshot.id });
        } else {
          console.log("No existe el producto");
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  
  if (!item) {
    return <h2>Cargando producto...</h2>;
  }

  
  return (
    <div>
      <h3>{item.nombre}</h3>
      <p>Precio: ${item.precio}</p>
      <p>{item.descripcion}</p>
      <img 
        src={item.imagen} 
        alt={item.nombre} 
        width="300"
      />

    </div>
    
    
  );
}

export default DetalleProducto;
