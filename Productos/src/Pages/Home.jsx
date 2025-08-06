import '../Diseños/Home.css'
import Carrusel from '../componentes/Carrusel.jsx'
import Carrusel1 from '../componentes/Carrusel1.jsx'
const Home =()=>{
return(
<>
<h1>Bienvenidos a mi tienda online</h1>
<Carrusel/>

<h2>Productos que te pueden interesar</h2>
<Carrusel1/>
</>
)
}
export default Home