let mysql=require("mysql2")
let conexion = mysql.createConnection({
    host:"127.0.0.1",
    user:"adso",
    password:"adso3312932",
    database:"ejemplo",
    port:"3306"
})
conexion.connect((error)=>{
    if(error){
        console.log("error de conexion base de datos")
    }
    else{
        console.log("Conexion a BD realizada")
    }
})
module.exports = conexion