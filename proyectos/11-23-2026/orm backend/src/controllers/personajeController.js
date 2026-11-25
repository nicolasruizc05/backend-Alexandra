const personaje = require("../models/personajeModels");
class personajeController{
    guardar= async(req,res)=>{
        let {nombrePersonaje,juego_id}= req.body
        let respuesta = await personaje.create({nombrePersonaje,juego_id})
        return res.json({mensaje:"Personaje guardado correctamente"})
    }
    lista = async(req,res)=>{
        let resp = await personaje.findAll()
        return res.json({
            respuesta:resp
        })
    }
    buscarId = async(req,res)=>{
        let {id}= req.params
        let busca = await personaje.findByPk(id)
        return res.json({
            respuesta:busca
        })
    }
    actualizar = async(req,res)=>{
        let {id}=req.params
        let {nombrePersonaje,juego_id}= req.body
        let busca = await personaje.findByPk(id)
        if (busca){
            await busca.update({nombrePersonaje,juego_id})
            return res.json({
                mensaje:"Personaje actualizado correctamente",
                datos:busca
            })
        }
    }
    eliminar= async(req,res)=>{
        let {id}= req.params
        let busca = await personaje.findByPk(id)
        if (busca){
            await busca.destroy()
            return res.json({
                mensaje:"Personaje eliminado correctamente"
            })
        }
    }
}
module.exports = personajeController