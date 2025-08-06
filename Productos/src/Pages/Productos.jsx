import { Navigate, useNavigate, useParams } from 'react-router-dom'
import ApiProductos from '../componentes/ProductosAPI'
import { useEffect, useState } from 'react'

const TiposProductos = {
  1: "beauty",
  2: "fragrances",
  3: "furniture",
  4: "groceries"
}

// Asocia los nombres de las categorías con sus ID numéricos, me sirve para navegar entre nombres
const CategoriasPorNombre = {
  "beauty": 1,
  "fragrances": 2,
  "furniture": 3,
  "groceries": 4
}

const Productos = () => {
  const { idCategoria, idProducto } = useParams()
  const [productos, setProductos] = useState([])
  const [Opciones, setOpciones] = useState('')
  const navigate = useNavigate()

  //Encuentra el nombre de la categoria
  const categoria = idCategoria ? TiposProductos[idCategoria] : null
  
  const handleChange = (e) => {
    setOpciones(e.target.value)
  }

  const handleBuscar = () => {
    if (Opciones) {
      const idCategoriaSeleccionada = CategoriasPorNombre[Opciones]
      navigate(`/Productos/${idCategoriaSeleccionada}`)
    }
  }

  const categoriasUnicas = [...new Set(productos.map(p => p.category))].sort()
  
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProductos(data.products)
      })
      .catch(error => {
        console.error('Error al cargar productos:', error)
      })
  }, [])

  return (
    <>
      <div>
        <h4>Búsqueda de categorías</h4>
        <select className="opciones" onChange={handleChange} value={Opciones}>
          {categoriasUnicas.map((categoria, index) => (
            <option key={index} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
        <button onClick={handleBuscar}>
          Buscar
        </button>
      </div>
      <ApiProductos categoria={categoria} idProducto={idProducto} />
    </>
  )
}

export default Productos
