import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../main";
import { CartContext } from "../../context/ShoppingCartContext";

function DetalleProducto() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

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

  // Obtener la cantidad del producto en el carrito
  const quantityPerItem = cart.find((prod) => prod.id === item.id)?.quantity || 0;

  return (
    <div className="detalle-producto">
      <h3>{item.nombre}</h3>
      <p>Precio: ${item.precio}</p>
      <p>{item.descripcion}</p>
      <img src={item.imagen} alt={item.nombre} width="300" />

      <div className="botones-carrito">
        {quantityPerItem === 0 ? (
          <button className="item-add-button" onClick={() => addToCart(item.id, item.nombre, item.precio)}>
            + Agregar al carrito
          </button>
        ) : (
          <button className="item-plus-button" onClick={() => addToCart(item.id, item.nombre, item.precio)}>
            + Agregar
          </button>
        )}

        {quantityPerItem > 0 && (
          <button className="item-minus-button" onClick={() => removeFromCart(item.id)}>
            - Eliminar
          </button>
        )}
      </div>
    </div>
  );
}

export default DetalleProducto;
