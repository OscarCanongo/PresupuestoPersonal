const Sequelize = require('sequelize');
const db = require('../config/db');
const User = require('./User');

const Operation = db.define('operation', {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    concepto: {
        type: Sequelize.STRING(60),
        allowNull : false,  
        validate: {
            notEmpty: {
                msg: "Agrega el concepto"
            }
        },
    },  
    monto: {
        type: Sequelize.INTEGER,
        allowNull : false,  
        validate: {
            notEmpty: {
                msg: "Agrega el Monto"
            }
        },
    }, 
    tipo: {
        type: Sequelize.INTEGER,
        allowNull : false,  
        validate: {
            notEmpty: {
                msg: "Agrega el tipo"
            }
        },
    },  
    categoria: {
        type: Sequelize.INTEGER,
        allowNull : false,  
        validate: {
            notEmpty: {
                msg: "Agrega el tipo"
            }
        },
    }
});

//FK
Operation.belongsTo(User);

module.exports = Operation;