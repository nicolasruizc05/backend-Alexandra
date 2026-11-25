let express=require('express')
const juegoController = require('../controllers/juegosController')
let router = express.Router()

let juegoRoutes= new juegoController()
router.post('/juego',juegoRoutes.guardar)
router.get('/juego',juegoRoutes.lista)
router.get('/juego/:id',juegoRoutes.buscarId)
router.put('/juego/:id',juegoRoutes.actualizar)
router.delete('/juego/:id',juegoRoutes.eliminar)


module.exports= router