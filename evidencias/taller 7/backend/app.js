const express = require('express')
const app = express()
const PORT=3000
const cors=require('cors')
const routeAutores = require('./routes/autoresRoutes')
const routeUsuarios = require('./routes/UsuariosRoutes')
const routeCategorias = require('./routes/categoriasRoutes')
const routeLibros = require('./routes/librosRoutes')
const routePrestamos = require('./routes/prestamosRoutes')


app.use(express.json())
app.use(cors())

app.use("/api",routeAutores)
app.use("/api",routeUsuarios)
app.use("/api",routeCategorias)
app.use("/api",routeLibros)
app.use("/api",routePrestamos)

app.listen(PORT,()=>{
    console.log(`Servidor ejecutandose en el puerto ${PORT}`)
})