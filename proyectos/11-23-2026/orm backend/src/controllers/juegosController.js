let Juego = require('../models/juegosModels')
class juegoController{
    guardar=async(req,res)=>{
        let {nombre,precio}=req.body
        // funcion de sequelize=>
        let respuesta=await Juego.create({nombre,precio})
        return res.json({mensaje:"Juego registrado correctamente"})
    }
    lista = async(req,res)=>{
        let resp = await Juego.findAll()
        return res.json({
            respuesta:resp
        })
    } 
    buscarId=async(req,res)=>{
        let {id}= req.params
        let busca= await Juego.findByPk(id)
        return res.json({
            respuesta:busca
        })
    }
    actualizar = async(req,res)=>{
        let id = req.params.id
        let {nombre,precio}=req.body
        let busca= await Juego.findByPk(id)
        if (busca){
            await busca.update({nombre, precio})
            return res.json({
                mensaje:"Elemento actualizado",
                registro:busca
            })
        }
    }
    eliminar = async(req,res)=>{
        let id = req.params.id
        let busca = await Juego.findByPk(id)
        if(busca){
            await busca.destroy()
             return res.json({
                mensaje:"Elemento eliminado"
            })
        }
    }
}
module.exports = juegoController