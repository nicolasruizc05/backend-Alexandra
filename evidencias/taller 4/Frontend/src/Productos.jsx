 import { API_URL } from '../api'
 import { useState } from 'react'
 import { Container, Form, Button } from 'react-bootstrap'
 import Swal from 'sweetalert2'
 import Menu from "./Nav"
export default function Productos(){

    const [producto,setProducto]=useState({
        producto:"",
        categoria:"",
        precio:"",
        stock:""
    })
    const registrarProducto=async (e)=>{
        e.preventDefault()
        const respuesta= await fetch(`${API_URL}/guardar`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        })
        const datos = await respuesta.json()
        if (respuesta.ok){
            Swal.fire({
                title:"Producto registrado correctamente",
                text:datos.mensaje,
                icon:"success",
                confirmButtonText:"Aceptar"
            })
            setProducto({
                producto:"",
                categoria:"",
                precio:"",
                stock:""
            })
        }else{
            Swal.fire({
                title:"Error",
                text:datos.mensaje || "No se pudo registrar el producto",
                icon:"error",
                confirmButtonText:"Aceptar"
            })
        }
    }
    return(
        <Container className='mt-4'>
            <Menu></Menu>
            <Container className="p-4 shadow-sm w-100" style={{maxWidth:"500px"}}>
                <h2 className='text-center mb-4'>Registrar Producto</h2>
                <Form onSubmit={registrarProducto}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Nombre del producto</Form.Label>
                        <Form.Control type='text' name='producto' value={producto.producto} onChange={(e)=>setProducto({...producto,producto:e.target.value})}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control type='text' name='producto' value={producto.categoria} onChange={(e)=>setProducto({...producto,categoria:e.target.value})}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type='text' name='producto' value={producto.precio} onChange={(e)=>setProducto({...producto,precio:e.target.value})}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Stock</Form.Label>
                        <Form.Control type='text' name='producto' value={producto.stock} onChange={(e)=>setProducto({...producto,stock:e.target.value})}></Form.Control>
                    </Form.Group>
                    <Container className='d-flex justify-content-center'>
                        <Button variant='primary' type='submit'> Registrar Producto </Button>
                    </Container>
                </Form>
            </Container>
        </Container>
    )
}