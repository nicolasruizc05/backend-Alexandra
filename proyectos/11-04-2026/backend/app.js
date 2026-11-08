const express = require('express')
const app =express()
const PORT = 5000
const cors = require('cors')
const mysql = require('mysql2')
let router = require('./routes/PruebaRoutes')
let rutaGuardar=require('./routes/GuardarRoutes')
let routeUsuarios=require("./routes/UsuariosRoutes")
app.use(express.json())
app.use(cors())


// Lamar a routes

app.use("/api",router)

app.use("/apiguardar",rutaGuardar)

app.use("/apiUser",routeUsuarios)

app.listen(PORT,()=>{
    console.log("Servidor en ejecución "+ PORT)
})
