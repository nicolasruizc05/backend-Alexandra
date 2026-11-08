let conexion = require('../conexion/db')
class UsuarioController{
    guardarUsuario(req,res){
        const{nombre,apellido,direccion,telefono}=req.body
        conexion.query('INSERT INTO usuarios (nombre,apellido,direccion,telefono) VALUES (?,?,?,?)',[nombre,apellido,direccion,telefono],(error)=>{
            if(error){
                return res.json({
                    'mensaje':'Error al registrar el usuario'
                })
            }
            else{
                res.json({
                    'mensaje':'Usuario registrado correctamente'
                })
            }
        })
    }
    traerUsuario(req,res){
        conexion.query('SELECT * FROM usuarios',(error,resultado)=>{
            if(error){
                return res.json({
                    'mensaje':'Error al traer datos del usuario'
                })
            }
            else{
                return res.json(resultado)
            }
        })
    }
    buscarUsuario(req,res){
        const id =req.params.id
        conexion.query('SELECT * FROM usuarios WHERE id=?',[id],(error,resultado)=>{
            if (error){
                return res.status(500).json({
                    'mensaje':'Error no se pudo encontrar un usario con este id '
                })
            }
            else{
                return res.json(resultado)
            }
        })
    }
    actualizarUsuario(req,res){
        const id = req.params.id
        const {nombre,apellido,direccion,telefono}=req.body
        conexion.query('UPADTE usuarios SET nombre = ?, apellido = ?, direccion = ?, telefono = ? WHERE id =?',[nombre,apellido,direccion,telefono,id],(error,resultado)=>{
            if(error){
                res.status(500).json({
                    'mensaje':'No se pudo actualizar el usuario'
                })
            }
            else{
                res.json(resultado)
            }
        })
    }
    eliminarUsuario(req,res){
        const id = req.params.id
        conexion.query('DELETE from usuarios WHERE id = ?',[id],(error,resultado)=>{
            if(error){
                return res.status(500).json({
                    'mensaje':'Error al eliminar usuario'
                })
            }
            if(resultado.affectedRows===0){
                return res.json(404).json({
                    'mensaje':'Usuario no encontrado'
                })
            }
            res.json({
                'mensaje':'Usuario eliminado correctamente'
            })
        })
    }
}
module.exports = UsuarioController