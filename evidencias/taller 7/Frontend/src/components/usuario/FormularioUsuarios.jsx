import { useState } from "react"
import { Form, Button } from "react-bootstrap"

export default function FormularioUsuarios({cerrarModal, consultarUsuarios}){
    const [formulario, setFormulario] = useState({
    nombreUsuario: '',
    correoUsuario: '',
    telefonoUusario: '',
    estadoUsuario: ''
    })
    const registrarUsuario = async (e)=>{
        e.preventDefault()
        const respuesta = await fetch('http://localhost:3000/api/usuarios',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formulario)
    })
         if (respuesta.ok) {
            const datos = await respuesta.json()
            console.log("Registro exitoso:", datos)
            await consultarUsuarios()
            cerrarModal()
        } else {
            console.log("Error al registrar:", respuesta.status)
        }
    }
    return(
            <Form onSubmit={registrarUsuario}>
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

                <Button type="submit" variant="primary">Registrar usuario</Button>
            </Form>
    )
}






