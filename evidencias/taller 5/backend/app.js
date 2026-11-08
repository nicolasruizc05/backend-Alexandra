const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')
const rutaPrueba = require('./routes/PruebaRoutes')
const rutaUsuarios = require('./routes/UsuarioRoutes')
const rutaProductos = require('./routes/ProductoRoutes')

app.use(express.json())
app.use(cors())

app.use('/apiprueba',rutaPrueba)

app.use('/apiPrueba',rutaUsuarios)

app.use('/apiprueba',rutaProductos)

app.listen(PORT,()=>{
    console.log(`Servidor ejecutandose en el puerto ${PORT}`)
})