let conexion = require('../db/db')
let {DataTypes}= require('sequelize')
let personaje = require('./personajeModels')

let Juego = conexion.define('juegos', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { 
    tableName: 'juegos',
    timestamps: false
})

// Juego.hasMany(personaje,{
//     foreignKey:'juego_id',
//     as:'personajes'
// }
// )

module.exports=Juego
