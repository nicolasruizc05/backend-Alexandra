import { Link } from "react-router-dom"
import { Container, Nav, Navbar } from "react-bootstrap"
export default function Menu(){
    return(
        <Navbar className="navbar-tienda" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/dashboard"className="marca-tienda">Tienda Ruiz</Navbar.Brand>
                <Nav className="ms-auto gap-2">
                <Nav.Link as={Link}to='/productos' className="">Agregar Producto</Nav.Link>
                <Nav.Link as={Link} to='/contacto'>Contacto</Nav.Link>
                <Nav.Link as={Link} to='/'>Cerrar Sesion</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}