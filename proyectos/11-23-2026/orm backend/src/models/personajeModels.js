let conexion = require('../db/db');
let { DataTypes } = require('sequelize');
let Juego = require('./juegosModels');

let personaje = conexion.define('personajes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombrePersonaje: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    juego_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'personajes',
    timestamps: false
})
// personaje.belongsTo(Juego,{
//     foreignKey:'juego_id',
//     as:'juego'
// })
module.exports=personaje