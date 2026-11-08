class PruebaController{
    bienvenida(req,res){
        res.json({'mensaje':'Bienvenido a mi APP'})
    }
    verificar(req,res){
        res.json({'mensaje':'Servidor funcionando correctamente','estado':true})
    }
    recibir(req,res){
        const{nombre,edad}=req.body
        res.json({
            'mensaje':'Datos Recibidos correctamente',
            'nombre':nombre,
            'edad':edad
        })
    }
    sumar(req,res){
        const{numero1,numero2}=req.body
        res.json({
            resultado:numero1+numero2
        })
    }
}
module.exports=PruebaController