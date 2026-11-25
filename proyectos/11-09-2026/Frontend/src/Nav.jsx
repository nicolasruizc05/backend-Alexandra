import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
export  default function Menu(){
return(
<Navbar className="navbar-expand-sm bg-secondary">
    <Container fluid>
        <Nav.Link as={Link}to='/efecto'>Inicio</Nav.Link>
        <Nav.Link as={Link}to='/hook'>Contador</Nav.Link>
        <Nav.Link as={Link}to='/rol'>Gestión Roles</Nav.Link>
        <Nav.Link as={Link}to='/usuarios'>Gestion Usuarios</Nav.Link>
    </Container>
</Navbar>
)
}
