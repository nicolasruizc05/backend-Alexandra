import { useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { API_URL } from '../api'

export default function Tabla(){
    const [productos,setProductos]=useState([])
    const consultarProductos = async()=>{
        const respuesta = await fetch(`${API_URL}/productos`)
        console.log("Estado:", respuesta.status)
        const datos = await respuesta.json()
        console.log("Productos recibidos:", datos)
        setProductos(datos.productos)
    }
    return(
        <Container >
            <h2>Lista de productos</h2>
            <Button onClick={consultarProductos}>Consultar productos</Button>
            <Table striped bordered hover responsive className="mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Producto</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(producto=>(
                        <tr key={producto.idProduvto}>
                            <td>{producto.idProduvto}</td>
                            <td>{producto.producto}</td>
                            <td>{producto.categoria}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}