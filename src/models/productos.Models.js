const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Productos = sequelize.define('productos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.REAL,
        
    },
 
    foto_url: {
        type: DataTypes.STRING,
    },
    // foto: {
    //     // tipo de dato BLOB es para guardar la imagen en mi base de datos y no un string de la url a la misma 
    //     type: DataTypes.BLOB,
    //     // no coloco allowNull por q al no colocar es como si lo pongo en true
    // },
});

module.exports = Productos;