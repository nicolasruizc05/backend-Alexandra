let express = require("express")
const AutoresController = require("../controllers/AutoresController")
let routeAutores = express.Router()
let autor = new AutoresController
routeAutores.get("/autores",autor.listarAutores)
routeAutores.post("/autores",autor.registarAutores)
routeAutores.put("/autores/:idAutor",autor.actualizarAutores)
routeAutores.delete("/autores/:idAutor",autor.eliminarAutor)

module.exports = routeAutores