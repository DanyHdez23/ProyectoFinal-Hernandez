import { Link } from "react-router-dom";


function Item({nombre,precio,descripcion,id}) {
  return (
    

    <div className="card">
      
      <h2>{nombre}</h2>
      
      <p>{descripcion}</p>
      
      <p>Precio: ${precio}</p>
    </div>

    
  )
}

export default Item;
