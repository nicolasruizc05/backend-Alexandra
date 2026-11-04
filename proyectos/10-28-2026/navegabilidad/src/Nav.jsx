import { Link } from "react-router-dom"
export default function Nav(){
    return(
        <div>
            <nav>
                <li><Link to='/'>Login</Link></li>
                <li><Link to='/registro'>Registrarse</Link></li>
                <li><Link to='/dash'>Dashboard</Link></li>   
                <li><Link to='/usuario'>Usuario</Link></li>   
            </nav>
        </div>
    )
}