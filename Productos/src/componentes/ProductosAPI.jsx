import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Diseños/DetalleProductos.css'
import '../Diseños/Productos.css'

const Productos = ({ categoria, idProducto, detalleMode }) => {
  const [productos, setProductos] = useState([]);
  const [productoDetalle, setProductoDetalle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const CargarProducto = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        let productosFiltrados = response.data.products;

        // Muestra los productos que esten en esa categotia
        if (categoria) {
          productosFiltrados = productosFiltrados.filter(p => p.category === categoria);
        }

        // If idProducto muestra los detalles del producto 
        if (idProducto) {
          const idProdNum = parseInt(idProducto, 10);
          const producto = productosFiltrados.find(p => p.id === idProdNum);
          setProductoDetalle(producto || null);
          setLoading(false);
          return;
        }

        setProductos(productosFiltrados);
        setLoading(false);
      } catch (error) {
        console.error(error);
        alert(error.message);
        setLoading(false);
      }
    };
    CargarProducto();
  }, [categoria, idProducto]);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (idProducto && productoDetalle) {
    return (
      <div className="Productos">
        <h2>{productoDetalle.title}</h2>
        <img src={productoDetalle.thumbnail} alt={productoDetalle.title} />
        <p>{productoDetalle.description}</p>
        <p>Precio: ${productoDetalle.price}</p>
        <p>Categoría: {productoDetalle.category}</p>
      </div>
    );
  }

  if (idProducto && !productoDetalle) {
    return <div>Producto no encontrado.</div>;
  }

  // Si detalleMode es true muestra todos los detalles de los productos
  if (detalleMode) {
    return (
      <div>
        {productos.map((e) => (
          <div key={e.id} style={{border: '1px solid #ccc', marginBottom: '10px', padding: '10px'}}>
            <h3>{e.title}</h3>
            <img src={e.thumbnail} alt={e.title} style={{maxWidth: '150px'}} />
            <p>{e.description}</p>
            <p>Precio: ${e.price}</p>
            <p>Categoría: {e.category}</p>
          </div>
        ))}
      </div>
    );
  }

  // API productos 
  return (
    <div>
      <ul>
        {productos.map((e) => (
          <li key={e.id}>
            {e.title}
            <br />
            <img src={e.thumbnail} alt={e.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;
