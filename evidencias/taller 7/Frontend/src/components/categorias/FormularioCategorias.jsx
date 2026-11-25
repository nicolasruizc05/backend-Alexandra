import { useState } from "react"
import { Form, Button } from "react-bootstrap"

export default function FormularioCategorias({cerrarModal, consultarCategorias}){
    const {formulario,setFormulario}=useState({
        nombreCategoria:"",
        descripcionCategoria:""
    })
    const registrarCategoria = async (e)=>{
        e.preventDefault()
        const respuesta = await fetch ('http://localhost:3000/api/categorias',{
            method:'POST',
            headers:{
            'Content-Type':'application/json'
            },
            body:JSON.stringify(formulario)
        })
        if(respuesta.ok){
            const datos = await respuesta.json()
            console.log('Registro exitoso',datos)
            await consultarCategorias()
            cerrarModal()
        }
    }
    return(
        <Form onSubmit={registrarCategoria}>
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

                
                <Button type="submit" variant="primary">Registrar categoria</Button>
        </Form>
    )
}