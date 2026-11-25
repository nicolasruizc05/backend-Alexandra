import { useEffect, useState } from "react"

export default function TablaUsuarios(){
    const [user,setUser]= useState([])
    useEffect(()=>{
        traerUsuario()
    },[])
    let traerUsuario=async()=>{
        let respuesta = await fetch("http://localhost:3000/api/ver/usuario")
        let datos = await respuesta.json()
        console.log(datos)
        setUser(datos)
    }
    return(
        <div>
            
            <h1>Gestión de usuarios</h1>
            <table className="table table-bordered table-hover mt-3 w-75 mx-auto">
                <thead className="table-info">
                    <tr>
                        <td>Id</td>
                        <td>Nombres</td>
                        <td>Apellidos</td>
                        <td>Direccion</td>
                        <td>Telefono</td>
                        <td>Correo</td>
                    </tr>
                </thead>
                <tbody>
                    {user.map((usuario)=>(
                        <tr>
                            <td>{usuario.id_usuario}</td>
                            <td>{usuario.usuNombre}</td>
                            <td>{usuario.usuApellido}</td>
                            <td>{usuario.usuDireccion}</td>
                            <td>{usuario.usuTelefono}</td>
                            <td>{usuario.usuCorreo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}