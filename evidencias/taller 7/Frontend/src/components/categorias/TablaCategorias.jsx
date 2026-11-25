import { useEffect, useState } from "react"
import { Button, Container, Modal, Table } from "react-bootstrap"
import Menu from "../Menu"
import ActualizarCategorias from "./ActualizarCategorias"
import FormularioCategorias from "./FormularioCategorias"

export default function TablaCategorias(){
    const [categorias,setCategorias]=useState([])
    const [mostrarModal,setMostrarModal]=useState(false)
    const [categoriaEditar,setCategoriaEditar]=useState(null)
    const consultarCategorias=async ()=>{
        const respuesta = await fetch("http://localhost:3000/api/categorias")
        const datos = await respuesta.json()
        setCategorias(datos)
    }
    const eliminarCategoria = async(idCategoria)=>{
        const respuesta = await fetch (`http://localhost:3000/api/categorias/${idCategoria}`,{
            method:'DELETE'
        })
        const datos = await respuesta.json()
        console.log(datos)
        if (respuesta.ok){
            await consultarCategorias()
        }
    }
    useEffect(()=>{
        const cargarCategorias = async ()=>{
            await consultarCategorias()
        }
        cargarCategorias()
    },[])
    return(
        <Container>
                    <Menu></Menu>
                    <h1>Tabla de categorias</h1>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categorias.map((categoria) => (
                            <tr key={categoria.idCategoria}>
                                <td>{categoria.idCategoria}</td>
                                <td>{categoria.nombreCategoria}</td>
                                <td>{categoria.descripcionCategoria}</td>

                                <td>
                                    <Button variant="warning" size="sm" onClick={()=>{setCategoriaEditar(categoria);setMostrarModal(true)}}>Actualizar</Button>
                                    <Button variant="danger" size="sm" className="ms-2" onClick={()=>eliminarCategoria(categoria.idcategoria)}>Eliminar</Button></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    <Button variant="primary" onClick={()=>setMostrarModal(true)}>Nuevo categoria </Button>
                    <Modal show={mostrarModal} onHide={()=> setMostrarModal(false)} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Registrar categoria</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {categoriaEditar === null ?(
                                <FormularioCategorias cerrarModal={()=>setMostrarModal(false)} consultarCategorias={consultarCategorias}/>) :
                                (<ActualizarCategorias categoria={categoriaEditar} cerrarModal={()=>setMostrarModal(false)} consultarCategorias={consultarCategorias}/>)
                            }
                        </Modal.Body>
                    </Modal>
                </Container>
    )
}