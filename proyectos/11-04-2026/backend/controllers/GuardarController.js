class GuardarController{
    guardar(req,res){
        const {nombre,edad}=req.body
        res.json({mensaje:"Datos recibidos"+nombre +edad})
    }
}
module.exports=GuardarController