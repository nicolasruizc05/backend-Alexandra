let express = require('express')
const UsuarioController = require('../controllers/UsuarioController')

let rutaUsuario = express.Router()
let user = new UsuarioController
rutaUsuario.get('/ver/usuario',user.verUsuarios)
rutaUsuario.delete('/eliminar/usuario/:id_usuario',user.eliminarUsuarios)
rutaUsuario.put('/actualizar/usuario/:id_usuario',user.actualizarUsuario)

module.exports=rutaUsuario