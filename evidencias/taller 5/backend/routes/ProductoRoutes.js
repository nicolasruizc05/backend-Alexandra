let express = require('express')
let ProductosController = require('../controllers/ProductosController')

let rutaProductos = express.Router()
let producto = new ProductosController()
rutaProductos.post('/guardarp',producto.guardarProducto)
rutaProductos.get('/traerp',producto.traerProductos)
rutaProductos.get('/buscarp/:id',producto.buscarProducto)
rutaProductos.put('/actualizarp/:id',producto.actualizarProducto)
rutaProductos.delete('/eliminarp/:id',producto.eliminarProducto)
rutaProductos.get('/productosa',producto.productosAgotados)
rutaProductos.get('/bajostock',producto.bajoStock)

module.exports = rutaProductos