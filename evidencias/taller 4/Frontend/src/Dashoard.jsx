import { Container } from "react-bootstrap"
import Tabla from "./Tabla"
import Menu from "./Nav"
export default function Dashboard(){
    return(
        <Container>
            <Menu></Menu>
            <Tabla/>
        </Container>
    )
}