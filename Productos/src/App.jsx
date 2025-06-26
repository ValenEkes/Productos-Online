import { useState } from 'react'
import './App.css'
import './Pages/Contacto'
import './Pages/Productos'
import './Pages/ProductoDetalle'
import './Pages/Contacto'
import './Layouts/MainLayout'
import Layout from './Layouts/MainLayout'
import Productos from './Pages/Productos'
import QuienesSomos from './Pages/QuienesSomos'
import DetalleProductos from './Pages/ProductoDetalle'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HashRouter>
      <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/QuienesSomos"index element={<QuienesSomos/>}></Route>
      <Route path="/Productos/:idCategoria/:idProducto" element={<Productos/>}></Route>
      <Route path="/ProductosDetalles/" element={<DetalleProductos/>}></Route>
      <Route path="/Contactos" element={<Contactos/>}></Route>
      </Route>
      </Routes>
      </HashRouter> 
    </>
  )
}

export default App
