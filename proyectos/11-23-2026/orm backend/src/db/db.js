const sequelize = require('sequelize')
require('dotenv').config()
let conexion = new sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:process.env.DIALECT
    }
)
module.exports=conexion