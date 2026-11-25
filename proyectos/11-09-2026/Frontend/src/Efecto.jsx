import { useEffect } from "react"

export default function Efecto(){
    useEffect(()=>{
        alert("El componente se ha cargado")
    },[])
    return (
        <div>
            <h1>Hook useEffect</h1>
        </div>
    )
}