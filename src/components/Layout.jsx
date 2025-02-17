import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import cartIcon from "../../public/cartIcon.png";
import logo from "../assets/logo.png";

function Layout() {
  
  const { cart } = useContext(CartContext);

  
  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div>
      <nav>
        <ul>
        <li>
          <Link to={"/"}>
            <img 
              src={logo} 
              alt="Logo" 
              style={{ width: "80px", height: "auto" }} 
            />
          </Link>
        </li>
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
