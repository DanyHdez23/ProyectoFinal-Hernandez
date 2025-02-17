import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/ShoppingCartContext";

const categorias = {
  ACCESORIOS: "Accesorios",
  JUGUETES: "Juguetes",
  HIGIENE: "Higiene",
};

function ItemList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { cart, addToCart, removeFromCart, getQuantityById } = useContext(CartContext);

  // Filtrar los productos por categoría
  const filteredItems = selectedCategory
    ? items.filter((item) => item.categoria === selectedCategory)
    : items;

  return (
    <div>
      <div>
        <h2>Categorías</h2>
        <button onClick={() => setSelectedCategory(categorias.ACCESORIOS)}>
          Accesorios
        </button>
        <button onClick={() => setSelectedCategory(categorias.JUGUETES)}>
          Juguetes
        </button>
        <button onClick={() => setSelectedCategory(categorias.HIGIENE)}>
          Higiene
        </button>
      </div>

      <div className="card-container">
        {filteredItems.length === 0 ? (
          <h2>Cargando productos...</h2>
        ) : (
          filteredItems.map((item) => {
            const quantityPerItem = getQuantityById(item.id);

            return (
              <div key={item.id} className="card">
                {quantityPerItem > 0 && (
                  <div className="item-quantity">{quantityPerItem}</div>
                )}
                <h3>{item.nombre}</h3>
                <p>Precio: ${item.precio}</p>
                <p>{item.descripcion}</p>
                        
                <Link to={`/productos/${item.id}`}>
                  <button className="btn-ver-producto">Ver Producto</button>
                </Link>

                {quantityPerItem === 0 ? (
                  <button
                    className="item-add-button"
                    onClick={() => addToCart(item.id, item.nombre, item.precio)}
                  >
                    + Add to cart
                  </button>
                ) : (
                  <button
                    className="item-plus-button"
                    onClick={() => addToCart(item.id, item.nombre, item.precio)}
                  >
                    + add more
                  </button>
                )}

                {quantityPerItem > 0 && (
                  <button
                    className="item-minus-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    subtract item
                  </button>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ItemList;
