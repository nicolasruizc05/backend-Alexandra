import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function Formularioroles(){
    const [rolNombre,setRolNombre]=useState()
    const [rolDescripcion,setRolDescripcion]=useState()
    const [id_usuario,setId_usuario]=useState()
async function guardar() {
    let respuesta = await fetch("http://localhost:3000/api/guardar/rol",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            rolNombre:rolNombre,
            rolDescripcion:rolDescripcion,
            id_usuario:id_usuario
        })
    })
    let datos = await respuesta.json()
    alert(datos)
}
    return(
        <Container>
            <Form className="w-50">
                <Form.Group className="mb-3">
                    <Form.Label>Nombre del Rol</Form.Label>
                    <Form.Control type="text" placeholder="Escriba su nombre" onChange={(e)=>setRolNombre(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Descripción del Rol</Form.Label>
                    <Form.Control type="text" placeholder="Escriba la descripción" onChange={(e)=>setRolDescripcion(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Id del usuario</Form.Label>
                    <Form.Control type="text" placeholder="Escriba id del usuario" onChange={(e)=>setId_usuario(e.target.value)}/>
                </Form.Group>
                <Button onClick={guardar}>Guardar</Button>
            </Form>
        </Container>
    )
}
