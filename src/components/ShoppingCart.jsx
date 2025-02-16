import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);

  console.log("Carrito:", cart); // ✅ Agrega esto para depuración

  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * (curr.precio || 0), // ✅ Evita NaN usando `curr.precio || 0`
    0
  );

  return (
    <div className="cart-container">
      <div>
        <h2>Carrito de Compras</h2>
        <div>Items in cart: {quantity}</div>
        <div>Total: ${totalPrice.toFixed(2)}</div> {/* ✅ Formatear a 2 decimales */}
        <button onClick={() => console.log(cart)}>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
