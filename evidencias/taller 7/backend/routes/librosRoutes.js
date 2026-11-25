let express = require("express")
const LibrosController = require("../controllers/LibrosController")
let routeLibros = express.Router()
let libro = new LibrosController
routeLibros.get("/libros",libro.listarLibros)
routeLibros.post("/libros",libro.registrarLibro)
routeLibros.put("/libros/:idLibro",libro.actualizarLibros)
routeLibros.delete("/libros/:idLibro",libro.eliminarLibro)

module.exports = routeLibros