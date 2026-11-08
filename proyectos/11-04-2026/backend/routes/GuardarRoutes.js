let express = require('express')
let GuardarController =require("../controllers/GuardarController")

let rutaGuardar = express.Router()
let guardarC = new GuardarController()
rutaGuardar.post("/guardar",guardarC.guardar.bind())
module.exports = rutaGuardar
