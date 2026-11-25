let express = require('express')
const AccesoController = require('../controllers/AccesoController')
let rutaAcceso = express.Router()

let acceso = new AccesoController
rutaAcceso.post('/register', acceso.register)
rutaAcceso.post('/login',acceso.login)

module.exports = rutaAcceso