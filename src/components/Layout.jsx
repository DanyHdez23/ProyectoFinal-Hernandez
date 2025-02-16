import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import cartIcon from "../../public/cartIcon.png";

function Layout() {
  // ✅ Corrección: usar un objeto en lugar de un array
  const { cart } = useContext(CartContext);

  // Calcular la cantidad total de productos en el carrito
  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"productos"}>Productos</Link>
          </li>
          <li>
            <Link to={"sobre-nosotros"}>Sobre Nosotros</Link>
          </li>
          <li>
            <Link to={"Cart"} className="cart-icon">
              <img src={cartIcon} alt="Carrito" className="cart-image" /> 
              {quantity > 0 && <span className="cart-count">{quantity}</span>}
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
