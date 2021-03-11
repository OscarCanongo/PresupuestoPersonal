const Sequelize = require('sequelize');
//Extraer valores de variables de entorno
require('dotenv').config({
    path: 'string.env'
});

const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, '', {
    host: process.env.BD_HOST,
    dialect: 'mysql' ,
    port: process.env.BD_PORT
});

module.exports = db;
