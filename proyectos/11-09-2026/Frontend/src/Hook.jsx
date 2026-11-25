import { useEffect, useState } from "react"

export default function Hook(){
    const [contador,setContador]= useState(0)
    useEffect(()=>{
        alerta()
    },[contador])
    function alerta(){
        alert("El contador cambio ", contador)
    }
    return (
  <div>
    <h1>{contador}</h1>
    <button onClick={()=>setContador(contador+1)}>+</button>
  </div>
    )
}