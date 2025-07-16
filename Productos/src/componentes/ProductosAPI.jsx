import React, {useEffect, useState} from 'react';
import Api from '../Api';
const Productos=()=>{
const[Productos,SetProductos]=useState([])
const [loading, setLoading] =useState(true);
    
    useEffect(() => {
    Api.get('/productos')
    .then((response) => {
    SetProductos(response.data);
    setLoading(false);
    })
    .catch((error)=>{
    console.error('Error en la carga',error)
    setLoading(false)
    })
},[])
return(
    <div>
    <ul>
    {Productos.map((e)=>{
    <li key={e.id}>
     <p>{e.title}</p>   
    </li>
    })}    
    </ul>
    </div>
)
}
export default Productos
