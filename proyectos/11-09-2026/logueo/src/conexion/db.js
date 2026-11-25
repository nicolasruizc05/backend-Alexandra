let mysql = require('mysql2')

let conectar = mysql.createConnection({
    host:"127.0.0.1",
    user:"adso",
    password:"adso3312932",
    database:"acceso",
    port:"3306"
})

conectar.connect((error)=>{
    if(error){
        console.log("Error de conexion con la base de datos")
    }
    else{
        console.log("Conectado correctamente con la base de datos")
    }
})

module.exports = conectar.promise()