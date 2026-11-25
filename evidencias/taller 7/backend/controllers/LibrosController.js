const conexion = require("../conexion/db");
class LibrosController{
    registrarLibro = async (req,res)=>{
        let {tituloLibro,isbnLibro,anio_publicacionLibro,cantidadLibro,autor_id,categoria_id} = req.body
        try{
            let respuesta = await conexion.query("INSERT INTO libros (tituloLibro,isbnLibro,anio_publicacionLibro,cantidadLibro,autor_id,categoria_id)",[tituloLibro,isbnLibro,anio_publicacionLibro,cantidadLibro,autor_id,categoria_id])
            return res.json({
                mensaje:"Libro registrado correctamente"
            })
        }catch(error){
                return res.json({
                    mensaje:"Error al registrar el libro"   
                })
        }
    }
    listarLibros = async (req,res)=>{
        try{
            let respuesta = await conexion.query("SELECT * FROM libros")
            return res.json(respuesta[0])
        }catch(error){
            return res.json({
                mensaje:"Error al listar los libros"
            })
        }
    }
    actualizarLibros = async (req,res)=>{
        let {idLibro} = req.params
        let {tituloLibro,isbnLibro,anio_publicacionLibro,cantidadLibro,autor_id,categoria_id} = req.body
        try{
            let respuesta= await conexion.query("UPDATE libros SET tituloLibro=?,isbnLibro=?,anio_publicacionLibro=?,cantidadLibro=?.autor_id=?,categoria_id=? WHERE idLibro=?",[tituloLibro,isbnLibro,anio_publicacionLibro,cantidadLibro,autor_id,categoria_id,idLibro])
            return res.json({
                mensaje:"Libro actualizado correctamente"
            })
        }catch(error){
            return res.json({
                mensaje:"Error al actualizar el libro"
            })
        }
    }
    eliminarLibro = async (req,res)=>{
        let {idLibro} = req.params
        try{
            let respuesta = await conexion.query("DELETE FROM libros WHERE idLibro=?",[idLibro])
            return res.json({
                    mensaje:"Libro eliminado correctamente"
                })
        }catch{
            return res.json({
                mensaje:"No se puede eliminar el libro"
            })
        }
    }
}
module.exports = LibrosController