let conectar = require('../conexion/db')

class RolesController{

    async guardarRol(req,res){
        const {rolNombre,rolDescripcion,id_usuario} = req.body
        let agregar = await conectar.query('INSERT INTO roles (rolNombre,rolDescripcion,id_usuario) VALUES (?,?,?)',[rolNombre
            ,rolDescripcion,id_usuario
        ])
        return res.json({
            mensaje:"Rol guardado correctamente"
        })
    }
    async verRoles(req,res){
        
         let [ver] = await conectar.query('SELECT * FROM roles')
        return res.json(ver)
    }
    async eliminarRol(req,res){
        let {id_rol}= req.params
        let eliminar = await conectar.query('DELETE FROM roles WHERE id_rol=?',[id_rol])
        if(eliminar.affectedRows>=1){
            return res.json({
            mensaje:"Rol eliminado con exito"
        })
        }
    }
    async actualizarRol(req,res){
        let {id_rol}= req.params
        const {rolNombre,rolDescripcion,id_usuario}=req.body
        let [actualizar] = await conectar.query('update roles set rolNombre=?, rolDescripcion=?, id_usuario=? where id_rol=?', [rolNombre,rolDescripcion,id_usuario,id_rol])
        if (actualizar.affectedRows>=1){
            return res.json({
            mensaje:"Usuario actualizado con exito"
        })
        }
        
    }
}
module.exports = RolesController