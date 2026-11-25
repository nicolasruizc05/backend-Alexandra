import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Menu(){
    return(
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/"> Biblioteca Ruiz </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/usuarios">Usuarios</Nav.Link>
                        <Nav.Link as={Link} to="/autores">Autores</Nav.Link>
                        <Nav.Link as={Link} to="/categorias">Categorias</Nav.Link>
                        <Nav.Link as={Link} to="/libros">Libros</Nav.Link>
                        <Nav.Link as={Link} to="/prestamos">Prestamos</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        
        
    )
}