let express = require('express')
let UsuarioController = require('../controllers/UsuarioController')

let rutaUsuarios = express.Router()
let usuario = new UsuarioController()
rutaUsuarios.post('/guardaruser',usuario.guardarUsuario)
rutaUsuarios.get('/traeruser',usuario.traerUsuario)
rutaUsuarios.get('/buscaruser',usuario.buscarUsuario)
rutaUsuarios.put('/actualizaruser',usuario.actualizarUsuario)
rutaUsuarios.delete('/eliminaruser/:id',usuario.eliminarUsuario)

module.exports = rutaUsuarios