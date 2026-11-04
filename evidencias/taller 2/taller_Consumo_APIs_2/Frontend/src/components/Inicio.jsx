// Importar el useState
import { useState } from "react"
// Importar el API_URL
import { API_URL } from "../api"
// Importar componentes react Bootstrap
import { Container, Button } from "react-bootstrap"
// Creacion del componente
export default function Inicio() {
    //usestate
    const [mensaje, setMensaje] = useState("")
    //Creacion de la funcion consultarInicio
    async function consultarInicio() {
        const respuesta = await fetch(`${API_URL}/inicio`)
        const datos = await respuesta.json()
        setMensaje(datos.mensaje)
    }
    return (
        <Container>
            <h2>Inicio</h2>
            <Button onClick={consultarInicio}>Consultar Inicio</Button>
            <h1>{mensaje}</h1>
        </Container>
    )
}
