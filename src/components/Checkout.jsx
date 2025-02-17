import React, { useState, useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);
  const [formData, setFormData] = useState({ nombre: "", email: "", direccion: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    alert(`¡Gracias ${formData.nombre}! Tu pedido ha sido registrado.`);

    
    setCart([]);

    
    navigate("/");
  };

  return (
    <div className="checkout-container">
      <h2>Finalizar Compra</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Dirección:</label>
        <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />

        <button type="submit">Confirmar Compra</button>
      </form>
    </div>
  );
};

export default Checkout;
