import { Button, Container, Modal, Table } from "react-bootstrap";
import Menu from "../Menu";
import { useEffect, useState } from "react";
import FormularioAutores from "./FormularioAutores";
import ActualizarAutor from "./ActualizarAutor";

export default function TablaAutores(){
    const [autores,setAutores]=useState([])
    const [mostrarModal,setMostrarModal]=useState(false)
    const [autorEditar,setAutorEditar]=useState(null)
    const consultarAutores = async ()=>{
        const respuesta = await fetch("http://localhost:3000/api/autores")
        const datos = await respuesta.json()
        setAutores(datos)
    }
    const eliminarAutor = async (idAutor)=>{
        const respuesta = await fetch(`http://localhost:3000/api/autores/${idAutor}`,{
            method:'DELETE'
        })
        const datos = await respuesta.json()
        console.log(datos)

        if(respuesta.ok){
            await consultarAutores()
        }
    }
    useEffect(()=>{
        const cargarAutores = async ()=>{
            await consultarAutores()
        }
        cargarAutores()
    },[])
    return(
        <Container>
            <Menu></Menu>
            <h1>Tabla de autores registrados</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Nacionalidad</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {autores.map((autor) => (
                    <tr key={autor.idAutor}>
                        <td>{autor.idAutor}</td>
                        <td>{autor.nombreAutor}</td>
                        <td>{autor.nacionalidadAutor}</td>
                        <td>{autor.fecha_nacimientoAutor}</td>
                        <td>
                            <Button variant="warning" size="sm" onClick={()=>{setAutorEditar(autor);setMostrarModal(true)}}>Actualizar</Button>
                            <Button variant="danger" size="sm" className="ms-2" onClick={()=>eliminarAutor(autor.idAutor)} >Eliminar</Button></td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <Button variant="success" onClick={()=>setMostrarModal(true)}>Nuevo Autor</Button>
            <Modal show={mostrarModal} onHide={()=> setMostrarModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Registrar Autor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {autorEditar === null ?(
                        <FormularioAutores cerrarModal={()=>setMostrarModal(false)} consultarAutores={consultarAutores}/>) :
                        (<ActualizarAutor autor={autorEditar} cerrarModal={()=>setMostrarModal(false)} consultarAutores={consultarAutores}/>)
                    }
                </Modal.Body>
            </Modal>
        </Container>
    )
}