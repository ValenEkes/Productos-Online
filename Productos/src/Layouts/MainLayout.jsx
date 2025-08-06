import {Link,Outlet} from "react-router-dom"
import '../Diseños/Layout.css'
import Imagen from '../Fotos/Garbarino.png'
const Layout =()=>{
return(
    <>
    <nav className="NavBar">
      <div className="Contenedor">
        <Link to="/" className="Logo">
          <img src={Imagen} alt="Logo" />
        </Link>
        <div className="Links">
          <Link to="/">Home</Link>
          <Link to="/QuienesSomos">Quienes Somos</Link>
          <Link to="/Productos">Productos</Link>
          <Link to="/ProductosDetalles">Detalle Productos</Link>
          <Link to="/Contacto">Contacto</Link>
        </div>
      </div>
    </nav>

    <main>
      <Outlet />
    </main>

    <footer></footer>
  </>
)
}
export default Layout