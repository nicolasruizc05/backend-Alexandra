let conexion = require('../conexion/bd')
class UsuariosController{
    traer=(req,res)=>{
        conexion.query("SELECT * FROM usuario",(error,resultados)=>{
            if (error){
                return res.json({"mensaje":"Error al traer datos del usuario"})
            }
            else{
                return res.json(resultados)
            }
        })
    }
    guardar=(req,res)=>{
        const {nombre,apellido,direccion,telefono}=req.body
        conexion.query("INSERT INTO usuario (nombre,apellido,direccion,telefono) VALUES (?,?,?,?)",
        [nombre,apellido,direccion,telefono],(error)=>{
            if(error){
                return res.json({
                    "mensaje":"Error al registrar el usuario"
                })
            }
            else{
                return res.json({
                    "mensaje":"Ususario registrado correctamente"
                })
            }
        }
    )
    }
}
module.exports = UsuariosController