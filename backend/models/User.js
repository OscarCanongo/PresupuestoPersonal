const Sequelize = require('sequelize');
const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(60),
        allowNull : false,  
        validate: {
            notEmpty: {
                msg: "Agrega tu nombre"
            }
        },
    },  
    email: {
        type: Sequelize.STRING(60),
        allowNull : false,  
        validate: {
            isEmail: {
                msg: "Agrega un correo válido"
            },
            notEmpty: {
                msg: "El correo puede ser nulo"
            }
        },
        unique: {
            args: true,
            msg: "Usuario ya registrado"
        }
    },  
    password: {
        type: Sequelize.STRING(60), 
        allowNull: false, 
        validate: {
            notEmpty: {
                msg: "La contraseña no puede ser nula"
            }
        }
    }
}, {
    hooks: {
        beforeCreate(user) {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10) );
        }
    }
});

// Métodos personalizados
User.prototype.checkPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = User;