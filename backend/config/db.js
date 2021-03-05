const Sequelize = require('sequelize');
//Env vars 
require('dotenv').config({ path: 'string.env' });

const connectDB = async () => {
    const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
        host: process.env.BD_HOST,
        dialect: 'mysql' ,
        port: process.env.BD_PORT
    });
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;