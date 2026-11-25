const conectar = require("../conexion/db")
let bcrypt = require('bcrypt')


class AccesoController{

    login= async(req,res)=>{
        let {usuCorreo,usuPassword} =req.body
        let [respuesta] = await conectar.query('SELECT usuPassword FROM usuarios WHERE usuCorreo =? ', [usuCorreo])
            console.log(respuesta)
            let validar= await bcrypt.compare(usuPassword,respuesta[0].usuPassword)
            if (validar){
                return res.json({
                mensaje:"Logeo Correcto"
            })
            }
            else{
                return res.json({
                mensaje:"Contraseña incorrecta"
            })
            }
    }

    register=async(req,res)=>{
        //hash --> sirve para la encriptacion de contraseñas 
        const {usuNombre,usuApellido,usuDireccion,usuTelefono,usuCorreo,usuPassword} =req.body
        let contrasena = await bcrypt.hash(usuPassword,10)

        let respuesta= await conectar.query('INSERT INTO usuarios (usuNombre,usuApellido,usuDireccion,usuTelefono,usuCorreo,usuPassword) VALUES (?,?,?,?,?,?)',[usuNombre,usuApellido,usuDireccion,usuTelefono,usuCorreo,contrasena])
        return res.json({
            'mensaje':"usuario registrado correctamente",
            'usuario':{
                'nombre':usuNombre,
                'apellido':usuApellido
            }
                })

    }
}
module.exports = AccesoController