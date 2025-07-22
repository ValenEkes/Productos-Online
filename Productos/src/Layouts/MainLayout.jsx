import {Link,Outlet} from "react-router-dom"
import '../Diseños/Layout.css'
import Imagen from '../Fotos/Garbarino.png'
const Layout =()=>{
return(
<>
<div className="NavBar">
<nav>
<div className="Contenedor">
<Link to="/" className="Logo">
<img src={Imagen}/>
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
</div>
<Outlet/>
<footer>
</footer>
</>
)
}
export default Layout