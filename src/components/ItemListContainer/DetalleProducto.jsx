import React from 'react'
import productos from '../../data/productos'
import { useParams } from 'react-router-dom'


function DetalleProducto() {
  const {id} =useParams();
  const item=productos.find(prod=>prod.id===parseInt(id))
  return (
    <div>
      <h3>{item.nombre}</h3>
            <p>Precio: ${item.precio}</p>
            <p>{item.descripcion}</p>

    
    </div>
  )
}

export default DetalleProducto
