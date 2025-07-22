import { useParams } from 'react-router-dom'
import ApiProductos from '../componentes/ProductosAPI'

const TiposProductos={
  1: "beauty",
  2: "fragrances",
  3:"furniture",
  4:"groceries"
}

const Productos=()=>{
  const { idCategoria, idProducto } = useParams()
  const categoria = idCategoria ? TiposProductos[idCategoria] : null

  return(
    <>
      <ApiProductos categoria={categoria} idProducto={idProducto}/>
    </>
  )   
}

export default Productos
