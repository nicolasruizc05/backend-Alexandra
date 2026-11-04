import { Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Login(){
    let navigate=useNavigate()
    function llevarDash(){
        navigate("/dashboard")
    }
    function llevarRegister(){
        navigate("/registro")
    }

    return(
        <Container fluid className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
            <Container className="p-4 shadow-sm w-100" style={{maxWidth:"500px"}}>
                <h1 className="text-center mb-4">Iniciar Sesión</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control type="email" placeholder="
                        tu@correo.com"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="
                        Ingrese contraseña"/>
                    </Form.Group>
                    <Container className="d-flex justify-content-center gap-3">
                        <Button variant="primary" style={{width:"150px"}} onClick={llevarDash}>Iniciar Sesión</Button>
                        <Button variant="primary" style={{width:"150px"}} onClick={llevarRegister}>Registrarse</Button>
                    </Container>
                </Form>
            </Container>
        </Container>
    )
}