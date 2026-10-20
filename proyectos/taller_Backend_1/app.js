const express = require('express')
const app = express()
const PORT = 3000
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.method, req.url)
    next()
})
app.get('/inicio',(req,res)=>{
    res.json({mensaje:"Bienvenido a mi app"})
})

app.get('/informacion',(req,res)=>{
    res.json({
        nombre:"App prueba",
        version:"1.0.0",
        descripcion:"En esta app podremos encontrar informacion general y recibir solicitudes"
    })
})
app.post('/solicitudes',(req,res)=>{
    const{nombre,apellido,correo}= req.body
    const campos ={nombre,apellido,correo}
    const faltantes= Object.keys(campos).filter(c=>!campos[c])
    if(faltantes.length>0){
        return res.status(400).json({
            error:"Faltan campos obligatorios",
            campos:faltantes 
        })
    }
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (regexCorreo.test(correo)){
        return res.status(400).json({
            error: "El correo no tiene un formato válido"
        })
    }
    res.status(201).json({mensaje:"Solicitud recibida"})
})
app.use((req,res)=>{
    res.status(404).json({
        error:"Ruta no encontrada"
    })
})
app.listen(PORT,()=>{
    console.log("Servidor en el puerto "+ PORT)
})