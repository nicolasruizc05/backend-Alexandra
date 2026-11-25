import { useState } from "react"
import { Container, Form, Button } from "react-bootstrap"

export default function ActualizarUsuario({ usuario, cerrarModal, consultarUsuarios }) {
    const [formulario, setFormulario] = useState({
        nombreUsuario: usuario.nombreUsuario,
        correoUsuario: usuario.correoUsuario,
        telefonoUusario: usuario.telefonoUusario,
        estadoUsuario: usuario.estadoUsuario
    })
    const actualizarUsuario = async (e)=>{
        e.preventDefault()
        const respuesta = await fetch(`http://localhost:3000/api/usuarios/${usuario.idUsuario}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formulario)
        })
        const datos = await respuesta.json()
        console.log(datos)
        if(respuesta.ok){
            await consultarUsuarios()
            cerrarModal()
        }
    }

    return (
        <Container>
            <Form onSubmit={actualizarUsuario}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el nombre"
                        value={formulario.nombreUsuario}
                        onChange={(e)=>setFormulario({...formulario,nombreUsuario:e.target.value})}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingrese el correo"
                        value={formulario.correoUsuario}
                        onChange={(e)=>setFormulario({...formulario,correoUsuario:e.target.value})}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el teléfono"
                        value={formulario.telefonoUusario}
                        onChange={(e)=>setFormulario({...formulario,telefonoUusario:e.target.value})}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Estado</Form.Label>
                    <Form.Select
                    name="estadoUsuario"
                    value={formulario.estadoUsuario}
                    onChange={(e) => setFormulario({...formulario,estadoUsuario: e.target.value})}
                    >
                        <option value="">Seleccione un estado</option>
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                    </Form.Select>
                </Form.Group>

                <Button type="submit" variant="warning">Actualizar usuario</Button>
            </Form>
        </Container>
    )
}