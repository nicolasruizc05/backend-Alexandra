import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
export default function Registro(){
    let navigate = useNavigate()
    function llevarLogin(){
        navigate("/logeo")
    }
    return(
        <div>
            <h1>Registrarse</h1>
            <input type="text" placeholder="Escriba nombre completo"/>            
            <input type="text" placeholder="Escriba correo"/>            
            <input type="password" placeholder="Escriba password"/>          
            <Button onClick={llevarLogin}>Registrarse</Button>

        </div>
    )
}