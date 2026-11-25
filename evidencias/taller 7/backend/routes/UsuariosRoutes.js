let express = require("express")
const UsuariosController = require("../controllers/UsuariosController")
let routeUsuarios = express.Router()
let usuario = new UsuariosController
routeUsuarios.get("/usuarios",usuario.listarUsuarios)
routeUsuarios.post("/usuarios",usuario.registrarUsuario)
routeUsuarios.put("/usuarios/:idUsuario",usuario.actualizarUsuarios)
routeUsuarios.delete("/usuarios/:idUsuario",usuario.eliminarUsuarios)

module.exports = routeUsuarios