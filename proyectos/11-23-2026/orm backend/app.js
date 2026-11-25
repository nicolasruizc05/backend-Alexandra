const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const cors = require('cors')
const router = require('./src/routes/juegosRoutes')
const conexion = require('./src/db/db')
const ruta = require("./src/routes/personajeRoutes")
app.use(express.json())
app.use(cors())

app.use("/api",router)
app.use("/api",ruta)

app.listen(PORT,()=>{
    console.log(`Servidor ejecutandose en el puerto ${PORT}`)
})