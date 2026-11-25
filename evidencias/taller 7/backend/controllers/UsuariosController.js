const conexion = require('../conexion/db')
class UsuariosController{
    registrarUsuario = async (req,res)=>{
        let {nombreUsuario,correoUsuario,telefonoUusario,estadoUsuario}=req.body
        try{
            let respuesta = await conexion.query("INSERT INTO usuarios (nombreUsuario,correoUsuario,telefonoUusario,estadoUsuario) VALUES (?,?,?,?)",[nombreUsuario,correoUsuario,telefonoUusario,estadoUsuario])
            return res.json({
                mensaje:"Usuario registrado con exito"
            })
        }catch(error){
            return res.json({
                mensaje:"No se pudo registrar el usuario",
                error:error.message
            })
        }
    }
    listarUsuarios = async (req,res)=>{
        try{
            let respuesta = await conexion.query("SELECT * FROM usuarios")
            return res.json(respuesta[0])
        }catch(error){
            return res.json({
                mensaje:"Error al traer los datos de los usuarios"
            })
        }
    }
    actualizarUsuarios= async (req,res)=>{
        let {idUsuario} = req.params
        let {nombreUsuario,correoUsuario,telefonoUusario,estadoUsuario}=req.body
        try{
            let respuesta = await conexion.query("UPDATE usuarios SET nombreUsuario =?,correoUsuario=?,telefonoUusario=?,estadoUsuario=? WHERE idUsuario=?",[nombreUsuario,correoUsuario,telefonoUusario,estadoUsuario,idUsuario])
            return res.json({
                mensaje:"No se pudo actualizar el usuario"
            })
        }catch(error){
                return res.json({
                    mensaje:"Usuario actualizado correctamente"
                })
        }
    }
    eliminarUsuarios= async (req,res)=>{
        let {idUsuario}= req.params
        try{
            let respuesta = await conexion.query("DELETE FROM usuarios WHERE idUsuario=?",[idUsuario])
            return res.json({
                mensaje:"Usuario eliminado correctamente"
            })
        }catch(error){
                return res.json({
                    mensaje:"Error al eliminar el usuario"
                })
        }
    }
}
module.exports = UsuariosController