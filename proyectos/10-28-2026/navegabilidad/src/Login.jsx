import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
export default function Login(){
    let navigate = useNavigate()
    function llevarD(){
        navigate("/dash")
    }
    return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Escriba correo"/>         
            <input type="password" placeholder="Escriba password"/>          
            <Button onClick={llevarD}>Aceptar</Button>
        </div>
    )
}