let express = require('express')
// import express from "express"  <--- este ya no se usa se importa de la forma de arriba 
let PruebaController = require("../controllers/PruebaController")
// import PruebaController from "../controllers/PruebaController"
let router = express.Router()
// Crear objeto que instancia la clase
let controllerp = new PruebaController()
router.get("/prueba",controllerp.pruebita)

module.exports=router