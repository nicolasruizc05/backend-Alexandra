import { useState } from "react"
import { Button, Form } from "react-bootstrap"

export default function FormularioAutores({cerraModal,consultarAutores}){
    const [formulario,setFormulario]=useState({
        nombreAutor:'',
        nacionalidadAutor:'',
        fecha_nacimientoAutor:''
    })
    const registrarAutor = async (e)=>{
        e.preventDefault()
        const respuesta = await fetch("http:localhost:3000/api/autores",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formulario)
        })
        if(respuesta.ok){
            const datos = await respuesta.json()
            console.log("Registro exitoso",datos)
            await consultarAutores()
            cerraModal()
        }else{
            console.log("Error al registrar:",respuesta.status)
        }
    }
    return(
        <Form onSubmit={registrarAutor}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el nombre"
                        value={formulario.nombreAutor}
                        onChange={(e)=>setFormulario({...formulario,nombreAutor:e.target.value})}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Nacionalidad</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese la nacionalidad del autor"
                        value={formulario.nacionalidadAutor}
                        onChange={(e)=>setFormulario({...formulario,nacionalidadAutor:e.target.value})}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Fecha de Nacimiento</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Ingrese la fecha de nacimiento del autor"
                        value={formulario.fecha_nacimientoAutor}
                        onChange={(e)=>setFormulario({...formulario,fecha_nacimientoAutor:e.target.value})}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">Registrar Autor</Button>
            </Form>
    )
}