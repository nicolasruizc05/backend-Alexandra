const conexion = require("../conexion/db");
class CategoriasController{
    registrarCategoria = async (req,res)=>{
        let {nombreCategoria,descripcionCategoria}=req.body
        try{
            let respuesta = await conexion.query("INSERT INTO categorias (nombreCategoria,descripcionCategoria) VALUES (?,?)",[nombreCategoria,descripcionCategoria])
            return res.json({
                mensaje:"Categoria registrada correctamente"
            })
        }catch(error){
                return res.json({
                    mensaje:"Error al registrar la categoria"
                })
        }
        
    }
    listarCategorias = async (req,res)=>{
        try{
            let respuesta =await conexion.query("SELECT * FROM categorias")
            return res.json(respuesta[0])
        }catch(error){
                return res.json({
                    mensaje:"Error al traer el contenido de categorias"
                })
        }
    }
    actualizarCategorias = async (req,res)=>{
        let {idCategoria}= req.params
        let {nombreCategoria,descripcionCategoria}= req.body
        try{
            let respuesta = await conexion.query("UPDATE categorias SET nombreCategoria=?,descripcionCategoria=? WHERE idCategoria=?",[nombreCategoria,descripcionCategoria,idCategoria])
            return res.json({
                mensaje:"Categoria actualizada correctamente"
            })
        }catch(error){
                return res.json({
                    mensaje:"No se pudo actualizar la categoria"
                })
        }
    }
    eliminarCategoria = async (req,res)=>{
        let {idCategoria}= req.params
        try{
            let respuesta = await conexion.query("DELETE FROM categorias WHERE idCategoria=?",[idCategoria])
            return res.json({
                mensaje:"Categoria eliminada correctamente"
            })
        }catch(error){
                return res.json({
                    mensaje:"No se pudo eliminar la categoria"
                })
        }
    }
}
module.exports = CategoriasController