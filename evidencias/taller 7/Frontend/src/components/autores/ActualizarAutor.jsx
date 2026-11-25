import { useState } from "react"
import { Form, Button } from "react-bootstrap"

export default function ActualizarAutor({autor,cerrarModal,consultarAutor}){
    const [formulario,setFormulario]=useState({
        nombreAutor:autor.nombreAutor,
        nacionalidadAutor: autor.nacionalidadAutor,
        fecha_nacimientoAutor:autor.fecha_nacimientoAutor
    })
    const actualizarAutor=async (e)=>{
        e.preventDefault()
        const respuesta = await fetch(`http://localhost:3000/api/autores/${autor.idAutor}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formulario)
        })
        const datos=await respuesta.json()
        console.log(datos)
        if(respuesta.ok){
            await consultarAutor()
            cerrarModal()
        }
    }
    return(
        <Form onSubmit={actualizarAutor}>
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
                <Button type="submit" variant="warning">Registrar Autor</Button>
            </Form>
    )
}