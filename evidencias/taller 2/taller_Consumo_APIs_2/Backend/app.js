// Inportar CORS
const cors = require('cors')
// Importar Express
const express = require('express')
// Crear aplicación
const app = express()
// Definir el puerto
const PORT = 3002
// Configurar los permisos CORS
app.use(cors({
    origin:"http://localhost:5173"
}))
// Configuración para permitir que express lea JSON
app.use(express.json())
//Registrar las peticiones que llegan 
app.use((req,res,next)=>{
    console.log(req.method, req.url)
    next()
})
// Creación del endpoint GET /inicio
app.get('/inicio',(req,res)=>{
    res.json({
        mensaje:"Bienvenido a mi APP"
    })
})
// Creación del endpoint GET /informacion
app.get('/informacion',(req,res)=>{
    res.json({
        nombre:"App de prueba",
        version:"1.0.0",
        descripcion:"En esta app podremos demostrar el uso de las conexiones de APIs Frontend con el Backend"
    })
})
// Creacion del endpoint POST /solicitudes
app.post('/solicitudes',(req,res)=>{
    // Extraer los datos del req.body
    const {nombre,apellido,correo}= req.body
    // Comprobacion de campos vacios
    if(!nombre.trim() || !apellido.trim() || !correo.trim()){
        return res.status(400).json({
            error:"Debe diligenciar todos los campos"
        })
    }
    // Validamos el formato del correo 
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // Comprobamos el formato del correo y generamos una respuesta
    if(!regexCorreo.test(correo)){
        return res.status(400).json({
            error:"El correo no tiene un formato valido"
        })
    }
    // Mensaje de comprobacion de la solicitud recibida
    res.status(201).json({
        mensaje:"Solicitud recibida"
    })
})
// Middleware por ruta inexistente
app.use((req,res)=>{
    res.status(404).json({
        error:"Ruta no encontrada"
    })
})
// Poner el servidor en funcionamiento 
app.listen(PORT, ()=>{
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`)
})