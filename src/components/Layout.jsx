import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
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
        </ul>
      </nav>
    <Outlet/>
    </div>
  )
}

export default Layout;
