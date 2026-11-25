let express= require('express')
const RolesController = require('../controllers/RolesController')
let rutaRol = express.Router()

let rol = new RolesController
rutaRol.post('/guardar/rol',rol.guardarRol)
rutaRol.get('/ver/rol',rol.verRoles)
rutaRol.delete('/eliminar/rol/:id_rol',rol.eliminarRol)
rutaRol.put('/rol/:id_rol',rol.actualizarRol)

module.exports=rutaRol