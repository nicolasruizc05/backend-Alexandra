let express = require('express')
let cors = require('cors')
let rutaAcceso = require('./src/routes/AccesoRoute')
const rutaRol = require('./src/routes/RolesRoute')
const rutaUsuario = require('./src/routes/UsuarioRoute')
let PORT = 3000

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api',rutaAcceso)
app.use('/api',rutaRol)
app.use('/api',rutaUsuario)

app.listen(PORT,()=>{
    console.log`Servidor ejecutandose en el puerto ${PORT}`
})
