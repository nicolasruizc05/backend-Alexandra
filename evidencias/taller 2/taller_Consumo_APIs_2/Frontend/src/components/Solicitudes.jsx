// importar useState
import { useState } from "react"
// importar  el API
import { API_URL } from "../api"
// importar los componentes react bootstrap
import { Container, Button, Form } from "react-bootstrap"
// importar el componente de las aletras sweetalert2
import Swal from "sweetalert2"
// Creacion del componente
export default function Solicitudes() {
    const [solicitud, setSolicitud] = useState({
        nombre: "",
        apellido: "",
        correo: ""
    })
    function manejarCambio(evento) {
        const { name, value } = evento.target
        setSolicitud({
            ...solicitud,
            [name]: value
        })
    }
    async function enviarSolicitud(evento) {
        evento.preventDefault()
        const respuesta = await fetch(`${API_URL}/solicitudes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(solicitud)
        })
        const datos = await respuesta.json()
        Swal.fire({
            title: respuesta.ok ? "Solicitud recibida" : "Error",
            text: datos.mensaje || datos.error,
            icon: respuesta.ok ? "success" : "error",
            confirmButtonText: "Entendido"
        })
    }
    return (
        <Container>
            <h2>Enviar Solicitudes</h2>
            <Form onSubmit={enviarSolicitud}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        value={solicitud.nombre}
                        onChange={manejarCambio}
                        placeholder="Ingrese su nombre"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        name="apellido"
                        value={solicitud.apellido}
                        onChange={manejarCambio}
                        placeholder="Ingrese su apellido"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                        type="email"
                        name="correo"
                        value={solicitud.correo}
                        onChange={manejarCambio}
                        placeholder="Ingrese su correo"
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Enviar Solicitud
                </Button>
            </Form>
        </Container>
    )
}