const express = require('express')
const app =express()
const PORT = 5000
const cors = require('cors')
const mysql = require('mysql2')

app.use(express.json())
app.use(cors())

//Conexion a la base de datos
let conexion = mysql.createConnection({
    host:"127.0.0.1",
    user:"adso",
    password:"adso3312932",
    database:"ejemplo",
    port:"3306"
})
conexion.connect((error)=>{
    if(error){
        console.log("error de conexion base de datos")
    }
    else{
        console.log("Conexion a BD realizada")
    }
})

app.get('/prueba',(req,res)=>{
    res.json({
        mensaje: "Esto es una prueba"
    })
})

app.post('/guardar',(req,res)=>{
    const{nombre,edad}= req.body
    res.json({mensaje:"datos recibidos "+ nombre + edad})
})

app.post("/usuarios",(req,res)=>{
    const {nombre,apellido,direccion,telefono}=req.body
    conexion.query("INSERT INTO usuario (nombre,apellido,direccion,telefono) VALUES (?,?,?,?)",
        [nombre,apellido,direccion,telefono],(error)=>{
            if(error){
                return res.json({
                    "mensaje":"Error al registrar el usuario"
                })
            }
            else{
                return res.json({
                    "mensaje":"Ususario registrado correctamente"
                })
            }
        }
    )
})

app.listen(PORT,()=>{
    console.log("Servidor en ejecución "+ PORT)
})
