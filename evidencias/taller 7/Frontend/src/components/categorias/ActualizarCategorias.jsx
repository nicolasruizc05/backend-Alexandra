import { useState } from "react"
import { Container, Form, Button } from "react-bootstrap"

export default function ActualizarCategorias(categoria,cerrarModal,consultarCategorias){
    const [formulario,setFormulario]=useState({
        nombreCategoria:categoria.nombreCategoria,
        descripcionCategoria:categoria.descripcionCategoria
    })
    const actualizarCategoria = async (e)=>{
        e.preventDefault()
        const respuesta = await fetch(`http://localhost:3000/api/categorias/${categoria.idCategoria}`,{
            method:'PUT',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formulario)
        })
        const datos= await respuesta.json()
        console.log(datos)
        if(respuesta.ok){
            await consultarCategorias()
            cerrarModal()
        }
    }
    return(
        <Container>
            <Form onSubmit={actualizarCategoria}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el nombre de la categoria"
                        value={formulario.nombreCategoria}
                        onChange={(e)=>setFormulario({...formulario,nombreCategoria:e.target.value})}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese la descripcion de la categoria"
                        value={formulario.descripcionCategoria}
                        onChange={(e)=>setFormulario({...formulario,descripcionCategoria:e.target.value})}
                    />
                </Form.Group>

                
                <Button type="submit" variant="primary">Actualizar categoria</Button>
             </Form>
        </Container>
    )
}