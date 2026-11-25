const conexion = require("../conexion/db")

class AutoresController{
    registarAutores= async(req,res)=>{
        let {nombreAutor,nacionalidadAutor,fecha_nacimientoAutor} = req.body
        try{
            let respuesta = conexion.query("INSERT INTO autores (nombreAutor,nacionalidadAutor,fecha_nacimientoAutor) VALUES (?,?,?)",
            [nombreAutor,nacionalidadAutor,fecha_nacimientoAutor])
            res.json({
                mensaje:"Autor registrado correctamente",
                datos:respuesta[0]
            })
        }catch(error){
            res.json({
                mensaje:"Error al registrar el Autor"
            })
        }
    }
    listarAutores = async (req,res)=>{
        try{
            let respuesta = await conexion.query("SELECT * FROM autores")
            res.json(respuesta[0])
        }catch(error){
            res.json({
                mensaje:"Error al traer la informacion de los autores"
            })
        }
    }
    actualizarAutores = async (req,res)=>{
        let {idAutor} = req.params
        let {nombreAutor,nacionalidadAutor,fecha_nacimientoAutor} = req.body
        try{
            let respuesta = await conexion.query("UPDATE autores SET nombreAutor = ?, nacionalidadAutor=?,fecha_nacimientoAutor=? WHERE idAutor=?",
                [nombreAutor,nacionalidadAutor,fecha_nacimientoAutor,idAutor])
            return res.json({
                mensaje:"Autor actualizado correctamente"
                })
        }catch(error){
                res.json({
                    mensaje:"Error al actualizar el autor"
                })
        }
    }
    eliminarAutor = async (req,res)=>{
        let {idAutor}=req.params
        try{
            let respuesta = await conexion.query("DELETE from autores WHERE idAutor=?",[idAutor])
            return res.json({
                    mensaje:"Autor eliminado correctamente"
                })
        }catch(error){
                return res.json({
                    mensaje:"No fue posible eliminar este autor"
                })
        }
    }
}
module.exports = AutoresController