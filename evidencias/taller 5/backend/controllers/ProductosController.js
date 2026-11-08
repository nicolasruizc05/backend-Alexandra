let conexion = require('../conexion/db')
class ProductosController{
    guardarProducto(req,res){
        const {proNombre,proDescripcion,proPrecio,proStock} = req.body
        conexion.query('INSERT INTO productos (proNombre,proDescripcion,proPrecio,proStock) VALUES (?,?,?,?)', [proNombre,proDescripcion,proPrecio,proStock],(error)=>{
            if(error){
                return res.json({
                    'mensaje':'Error al registrar el producto'
                })
            }
            else{
                return res.json({
                    'mensaje':'Producto registrado correctamente'
                })
            }
        })
    }
    traerProductos(req,res){
        conexion.query('SELECT * FROM productos',(error,resultado)=>{
            if(error){
                return res.json({
                    'mensaje':'Error al traer los datos de producto'
                })
            }
            else{
                return res.json(resultado)
            }
        })
    }
    buscarProducto(req,res){
        const id = req.params.id
        conexion.query('SELECT * FROM productos WHERE id = ?',[id],(error,resultado)=>{
            if(error){
                return res.json({
                    'mensaje':'Error no hay productos con este numero de id'
                })
            }
            else{
                return res.json(resultado)
            }
        })
    }
    actualizarProducto(req,res){
        const id = req.params.id
        const {proNombre,proDescripcion,proPrecio,proStock}= req.body
        conexion.query('UPDATE productos SET proNombre = ?, proDescripcion = ?, proPrecio = ?, proStock = ? WHERE id = ?',[proNombre,proDescripcion,proPrecio,proStock,id],(error,resultado)=>{
            if(error){
                return res.json({
                    'mensaje':'Error al actualizar el producto'
                })
            }
            else{
                return res.json(resultado)
            }
        })
    }
    eliminarProducto(req,res){
        const id = req.params.id
        conexion.query('DELETE from productos WHERE id = ?',[id],(error,resultado)=>{
            if(error){
                return res.status(500).json({
                    'mensaje':'Error al eliminar producto'
                })
            }
            if(resultado.affectedRows===0){
                return res.status(404).json({
                    'mensaje':'Producto no encontrado'
                })
            }
            res.json({
                'mensaje':'Producto eliminado correctamente'
            })
        })
    }
    productosAgotados(req,res){
        conexion.query('SELECT * FROM productos WHERE proStock = 0',(error,resultado)=>{
            if(error){
                return res.json({
                    'mensaje':'No hay productos sin stock'
                })
            }
            else{
                res.json(resultado)
            }
        })
    }
    bajoStock(req,res){
        conexion.query('SELECT * FROM productos WHERE proStock < 5',(error,resultado)=>{
            if(error){
                return res.json({
                    'mensaje':'No hay productos con bajo stock'
                })
            }
            else{
                res.json(resultado)
            }
        })
    }
}
module.exports = ProductosController