let express = require('express')
let PruebaController = require('../controllers/PruebaController')
let rutaPrueba = express.Router()
let pruebaC= new PruebaController()
rutaPrueba.get('/bienvenida',pruebaC.bienvenida)
rutaPrueba.get('/verificar',pruebaC.verificar)
rutaPrueba.post('/recibir',pruebaC.recibir)
rutaPrueba.post('/sumar',pruebaC.sumar)

module.exports=rutaPrueba