import { useState } from 'react'
import {HashRouter,Routes,Route} from 'react-router-dom'
import './App.css' 
import Layout from './Layouts/MainLayout'
import Home from './Pages/Home'
import Contactos from'./Pages/Contacto'
import Productos from './Pages/Productos'
import QuienesSomos from './Pages/QuienesSomos'
import DetalleProductos from './Pages/ProductoDetalle'
import ApiProductos from './componentes/ProductosAPI'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <HashRouter>
      <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/QuienesSomos"index element={<QuienesSomos/>}></Route>
      <Route path="/Productos" element={<Productos/>}></Route>
      <Route path="/Productos/:idCategoria" element={<Productos/>}></Route>
      <Route path="/Productos/:idCategoria/:idProducto" element={<Productos/>}></Route>
      <Route path="/ProductosDetalles/" element={<DetalleProductos/>}></Route>
      <Route path="/Contacto" element={<Contactos/>}></Route>
      </Route>
      </Routes>
      </HashRouter> 
      <ApiProductos/>
    </>
  )
}

export default App
