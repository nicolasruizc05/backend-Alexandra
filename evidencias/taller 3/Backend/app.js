const cors = require('cors')
const express= require('express')
const app = express()
const PORT = 5000
const mysql=require('mysql2')

app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}))

let conexion = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"050998",
    database:"tienda",
    port:"3306"
})
conexion.connect((error)=>{
    if(error){
        console.log("error de conexion base de datos")
    }
    else{
        console.log("Conexion realizada")
    }
})
app.get('/prueba',(req,res)=>{
    res.json({
        "mensaje":"Esta es la conexion entre bs y el backend"
    })
})
app.post('/guardar',(req,res)=>{
    const {producto,categoria,precio,stock} = req.body
    conexion.query("INSERT INTO productos (producto,categoria,precio,stock) VALUES (?,?,?,?)",
        [producto,categoria,precio,stock],(error)=>{
            if (error){
                return res.json({
                    "mensaje":"Error al registrar el producto"
                })
            }
            else{
                return res.json({
                    "mensaje":"Producto registrado correctamente"
                })
            }
        }
    )
})
app.get('/productos',(req,res)=>{
    conexion.query("select * from productos",(error,resultado)=>{
        if (error){
            return res.status(500).json({
                "error":"Error al consultar el producto"
            })
        }
        res.status(200).json({
            productos:resultado
        })
    })
})
app.listen(PORT,()=>{
    console.log(`Servidor ejecutandose en el puerto ${PORT}`)
})
