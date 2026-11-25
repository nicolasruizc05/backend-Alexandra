import {  useEffect, useState } from "react"
import Formularioroles from "./Formularioroles"
export default function TablaRoles(){
    const [rol,setRol]= useState([])
    useEffect(()=>{
        traerDatos()
    },[])
    async function traerDatos(){
        let respuesta= await fetch("http://localhost:3000/api/ver/rol")
        const datos = await respuesta.json()
        console.log(datos)
        setRol(datos)
    }
    return(
        <div>
            <h1>Gestión de roles</h1>
            <h3>Registro de Roles</h3>
            <Formularioroles></Formularioroles>
            <table className="table w-75 mx-auto table-bordered table-hover mt-3">
                <thead className="table-primary">
                    <tr>
                        <th>Id</th>
                        <th>Nombre Rol</th>
                        <th>Descripción Rol</th>
                        <th>Id Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {rol.map(index=>(
                        <tr>
                            <td>{index.id_rol}</td>
                            <td>{index.rolNombre}</td>
                            <td>{index.rolDescripcion}</td>
                            <td>{index.id_usuario}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}