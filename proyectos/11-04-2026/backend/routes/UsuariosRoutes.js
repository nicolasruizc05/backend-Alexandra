let express = require('express')
let UsuariosController = require('../controllers/UsuarioController')
let routeUsuarios=express.Router()
let usuario = new UsuariosController
routeUsuarios.get("/usuarios",usuario.traer)
routeUsuarios.post("/usuarios",usuario.guardar)
module.exports= routeUsuarios