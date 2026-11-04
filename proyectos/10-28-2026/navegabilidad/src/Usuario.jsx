import { useState } from "react"
export default function Usuario(){
    const [nombre,setNombre]=useState()
    const [apellido,setApellido]=useState()
    const [direccion,setDireccion]=useState()
    const [telefono,setTelefono]=useState()
    async function guardar(){
        let respuesta=await fetch("http://localhost:5000/usuarios",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                nombre:nombre,
                apellido:apellido,
                direccion:direccion,
                telefono:telefono
            })
        })
        let datos= await respuesta.json()
        alert(datos.mensaje)
    }
    return(
        <div>
            <h1>Usuario</h1>
            <input type="text" placeholder="nombre" onChange={(e)=>setNombre(e.target.value)} />
            <input type="text" placeholder="apellido" onChange={(e)=>setApellido(e.target.value)} />
            <input type="text" placeholder="direccion" onChange={(e)=>setDireccion(e.target.value)}/>
            <input type="text" placeholder="telefono" onChange={(e)=>setTelefono(e.target.value)} />
            <button onClick={guardar}>Registrarse</button>
        </div>
    )
}