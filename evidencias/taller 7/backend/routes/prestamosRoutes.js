let express = require("express")
const PrestamosController = require("../controllers/PrestamosController")
let routePrestamos = express.Router()
let prestamo = new PrestamosController
routePrestamos.get("/prestamos",prestamo.listarPrestamos)
routePrestamos.post("/prestamos",prestamo.registarPrestamo)
routePrestamos.put("/prestamos/:idPrestamo",prestamo.actualizarPrestamos)
routePrestamos.delete("/prestamos/:idPrestamo",prestamo.eliminarPrestamos)

module.exports = routePrestamos