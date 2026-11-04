// importar useState
import { useState } from "react"
// importar  el API
import { API_URL } from "../api"
// importar los componentes react bootstrap
import { Container, Button } from "react-bootstrap"
// importar el componente de las aletras sweetalert2
import Swal from "sweetalert2"
// Creacion del componente
export default function Informacion() {
    //useState
    const [info, setInfo] = useState(null)
    // funcion de consultar informacion 
    async function consultarInformacion() {
        const respuesta = await fetch(`${API_URL}/informacion`)
        const datos = await respuesta.json()
        setInfo(datos)
        Swal.fire({
            title: datos.nombre,
            html: `
        <p><strong>Version: </strong>${datos.version}</p>
        <p><strong>Descripcion: </strong>${datos.descripcion}</p> 
        `,
            icon: "info",
            confirmButtonText: "Entendido"
        })
    }
    return (
        <Container>
            <h2>Informacion de la aplicacion</h2>
            <Button onClick={consultarInformacion}>Info</Button>
            {info && (
                <Container>
                    <p>Nombre: {info.nombre}</p>
                    <p>Version: {info.version}</p>
                    <p>Descripcion: {info.descripcion}</p>
                </Container>
            )}
        </Container>
    )
}