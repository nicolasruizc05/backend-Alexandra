let express=require('express')
const personajeController = require('../controllers/personajeController')
let ruta= express.Router()

let personajeRoutes= new personajeController()

ruta.post("/personaje",personajeRoutes.guardar)
ruta.get("/personaje",personajeRoutes.lista)
ruta.get("/personaje/:id",personajeRoutes.buscarId)
ruta.put("/personaje/:id",personajeRoutes.actualizar)
ruta.delete("/personaje/:id",personajeRoutes.eliminar)

module.exports= ruta