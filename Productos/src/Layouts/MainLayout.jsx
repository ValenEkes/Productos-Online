import {Link,Outlet} from "react-router-dom"
const Layout =()=>{
return(
<>
<nav>
<Link to="/">Home</Link>
<Link to="/QuienesSomos">Quienes Somos</Link> 
<Link to="/Productos">Productos</Link> 
<Link to="/ProductosDetalles">Detalle Productos</Link>
<Link to="/Contacto">Contacto</Link>
</nav>
<Outlet/>
<footer>
</footer>
</>
)
}
export default Layout