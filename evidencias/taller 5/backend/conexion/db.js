let mysql = require('mysql2')
let conexion = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'050998',
    database:'taller_api',
    port:'3306'
})
conexion.connect((error)=>{
    if(error){
        console.log('Error en la conexión con la base de datos')
    }
    else{
        console.log('Conexión con la base de datos exitosa')
    }
})
module.exports = conexion