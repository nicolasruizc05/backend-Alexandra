import { Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { API_URL } from '../api'
export default function Registro(){
    let navigate = useNavigate()
    function llevarInicio(){
        navigate("/")
}
    return(
        <Container fluid className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
            <Container className="p-4 shadow-sm w-100" style={{maxWidth:"500px"}}>
                <h1 className="text-center mb-4">Registrarse</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="
                        Ingrese su nombre"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" placeholder="
                        Ingrese sus apellidos"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Correo electronico</Form.Label>
                        <Form.Control type="email" placeholder="
                        Ingrese su correo electronico" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="
                        Ingrese su contraseña" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Confirmar contraseña</Form.Label>
                        <Form.Control type="password" placeholder="
                        Ingrese su contraseña"/>
                    </Form.Group>
                    <Container className="d-flex justify-content-center gap-3">
                        <Button variant="primary" style={{width:"150px"}} onClick={llevarInicio}>Iniciar Sesión</Button>
                        <Button variant="primary" style={{width:"150px"}} onClick={llevarInicio}>Registrarse</Button>
                    </Container>
                </Form>
            </Container>
        </Container>
    )
}