const conexion = require("../conexion/db");
class PrestamosController{
    registarPrestamo = async (req,res)=>{
        let {usuario_id,libro_id,fechaPrestamo,fechaDevolucion,estado}=req.body
        try{
            let respuesta = await conexion.query("INSERT INTO prestamos (usuario_id,libro_id,fechaPrestamo,fechaDevolucion,estado)",[usuario_id,libro_id,fechaPrestamo,fechaDevolucion,estado])
            return res.json({
                mensaje:"Prestamo registrado correctamente"
            })
        }catch(error){
            return res.json({
                mensaje:"Error al registrar un prestamo"
            })
        }
    }
    listarPrestamos = async (req,res)=>{
        try{
            let respuesta = await conexion.query("SELECT * FROM prestamos")
            return res.json(respuesta[0])
        }catch(error){
            return res.json({
                mensaje:"No se puede obtener datos de los prestamos"
            })
        }
    }
    actualizarPrestamos = async (req,res)=>{
        let {idPrestamo} = req.params
        let {usuario_id,libro_id,fechaPrestamo,fechaDevolucion,estado}=req.body
        try{
            let respuesta = await conexion.query("UPDATE prestamos SET usuario_id=?,libro_id=?,fechaPrestamo=?,fechaDevolucion=?,estado=? WHERE idPrestamo=?",[usuario_id,libro_id,fechaPrestamo,fechaDevolucion,estado,idPrestamo])
            return res.json({
                mensaje:"Prestamo actualizado correctamente"
            })
        }catch(error){
            return res.json({
                mensaje:"Error al actualizar el prestamo"
            })
        }
    }
    eliminarPrestamos = async (req,res)=>{
        let {idPrestamo} = req.params
        try{
            let respuesta = await conexion.query("DELETE FROM prestamos WHERE idPrestamo=?",[idPrestamo])
            return res.json({
                mensaje:"Prestamo eliminado correctamente"
            })
        }catch(error){
                return res.json({
                    mensaje:"Error al eliminar el prestamo"
                })
        }
    }
}
module.exports = PrestamosController