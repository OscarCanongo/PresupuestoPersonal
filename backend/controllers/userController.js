const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {

    // check for errors
    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json({errors: errors.array() })
    }

    // extract email y password
    const { name, email, password } = req.body;


    try {
        // Check that registered user is unique
        let user = await User.findOne({ email });

        if(user) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        //Create User
        user = new User(req.body);
        await user.save()

        // Create and sign JWT
        const payload = {
            user: {
                id: user.id
            }
        };

        // sign JWT
        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 3600 // 1 hour
        }, (error, token) => {
            if(error) throw error;

            // Confirmation message 
            res.json({ token  });
        });


    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}