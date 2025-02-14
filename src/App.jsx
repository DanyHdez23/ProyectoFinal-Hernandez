import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Error from './components/Error';
import DetalleProducto from './components/ItemListContainer/DetalleProducto';
import "./components/ItemListContainer/styles.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='productos' element={<ItemListContainer/>} />
      <Route path='sobre-nosotros' element={<Nosotros />} />
      <Route path='productos/:id' element={<DetalleProducto/>} />
      <Route path='*' element={<Error />} />
    </Route>
  </Routes>
</BrowserRouter>

    </>
  )
}

export default App
