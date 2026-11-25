let conectar = require('../conexion/db')

class UsuarioController{
    async verUsuarios(req,res){
       let [visualizar] = await conectar.query('SELECT * FROM usuarios')
            return res.json(visualizar)
    }
    async eliminarUsuarios(req,res){
        let {id_usuario}= req.params
        let eliminado = await conectar.query('DELETE FROM usuarios WHERE id_rol=?',[id_usuario])
            return res.json({
                    mensaje:"Usuario eliminado correctamente"
                })
    }
    async actualizarUsuario(req,res){
        let {id_usuario}= req.params
        let actualizar = await conectar.query('UPDATE FROM usuarios WHERE id_rol=?',[id_usuario])
            return res.json({
                    mensaje:"Usuario actualizado correctamente"
                })
            }
    }
module.exports = UsuarioController