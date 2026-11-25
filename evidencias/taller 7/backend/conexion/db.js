let mysql = require('mysql2')
let conexion = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'050998',
    database:'Biblioteca',
    port:'3306'
})
conexion.connect((error)=>{
    if (error){
        console.log("Error en la conexion de la base de datos")
    }else{
        console.log("Conexion con la base de datos exitosa")
    }
})
module.exports=conexion.promise()