import { useEffect, useState } from "react"
import {  Container,  Table, Button, Modal } from "react-bootstrap"
import FormularioUsuarios from "./FormularioUsuarios"
import ActualizarUsuario from "./ActualizarUsuarios"
import Menu from "../Menu"


export default function TablaUsuarios(){
    const [usuarios,setUsuarios]=useState([])
    const [mostrarModal, setMostrarModal] = useState(false)
    const [usuarioEditar, setUsuarioEditar] = useState(null);
    const consultarUsuarios = async ()=>{
            const respuesta = await fetch("http://localhost:3000/api/usuarios")
            console.log("Estado HTTP:", respuesta.status);
            const datos = await respuesta.json()
            console.log("Respuesta del servidor:", datos);
            setUsuarios(datos)
        }
    const eliminarUsuario = async (idUsuario) => {
    const respuesta = await fetch(`http://localhost:3000/api/usuarios/${idUsuario}`, {
        method: 'DELETE'
    })

    const datos = await respuesta.json();
    console.log(datos);

    if (respuesta.ok) {
        await consultarUsuarios();
    }
}
    useEffect(() => {
    const cargarUsuarios = async () => {
        await consultarUsuarios();
    };

    cargarUsuarios();
}, []);
console.log("Usuarios:", usuarios);
    return(
        <Container>
            <Menu></Menu>
            <h1>Tabla de usuarios</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                    <tr key={usuario.idUsuario}>
                        <td>{usuario.idUsuario}</td>
                        <td>{usuario.nombreUsuario}</td>
                        <td>{usuario.correoUsuario}</td>
                        <td>{usuario.telefonoUusario}</td>
                        <td>{usuario.estadoUsuario}</td>
                        <td>
                            <Button variant="warning" size="sm" onClick={()=>{setUsuarioEditar(usuario);setMostrarModal(true)}}>Actualizar</Button>
                            <Button variant="danger" size="sm" className="ms-2" onClick={()=>eliminarUsuario(usuario.idUsuario)}>Eliminar</Button></td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <Button variant="primary" onClick={()=>setMostrarModal(true)}>Nuevo Usuario </Button>
            <Modal show={mostrarModal} onHide={()=> setMostrarModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Registrar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {usuarioEditar === null ?(
                        <FormularioUsuarios cerrarModal={()=>setMostrarModal(false)} consultarUsuarios={consultarUsuarios}/>) :
                        (<ActualizarUsuario usuario={usuarioEditar} cerrarModal={()=>setMostrarModal(false)} consultarUsuarios={consultarUsuarios}/>)
                    }
                </Modal.Body>
            </Modal>
        </Container>
    )
}