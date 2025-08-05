import { Navigate, useNavigate, useParams } from 'react-router-dom'
import ApiProductos from '../componentes/ProductosAPI'
import { useEffect,useState } from 'react'

const TiposProductos={
  1: "beauty",
  2: "fragrances",
  3:"furniture",
  4:"groceries"
}

const Productos=()=>{
  const { idCategoria, idProducto } = useParams()
  const [productos, setProductos] = useState([])
  const [Opciones,setOpciones]=useState('')
  const navigate=useNavigate()
  const categoria = idCategoria ? TiposProductos[idCategoria] : null
  const handleChange=(e)=>{
    setProductos(e.target.value)
  }
  useEffect(()=>{
  fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {setProductos(data.products)})
  .catch(error=>{
    console.error(error)
  })
 },[])
  return(
    <>
    <div>
      <h4>Busqueda de categorias</h4>
       <select className="opciones">
      {productos.map(productos=>(
        <option key={productos.idCategoria}>
          {productos.category}
        </option>
      ))}
    </select>
    <button onClick={()=>{()=>navigate("/Productos/"+idCategoria)}} type="submit"></button>
    </div>
    <ApiProductos categoria={categoria} idProducto={idProducto}/>
    </>
  )   
}

export default Productos
