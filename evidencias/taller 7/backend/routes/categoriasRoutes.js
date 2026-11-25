let express = require("express")
const CategoriasController = require("../controllers/CategoriasController")
let routeCategorias = express.Router()
let categoria = new CategoriasController
routeCategorias.get("/categorias",categoria.listarCategorias)
routeCategorias.post("/categorias",categoria.registrarCategoria)
routeCategorias.put("/categorias/:idCategoria",categoria.actualizarCategorias)
routeCategorias.delete("/categorias/:idCategoria",categoria.eliminarCategoria)

module.exports = routeCategorias