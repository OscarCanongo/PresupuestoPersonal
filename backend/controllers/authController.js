const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.authUser = async (req, res) => {
    // check for errors
    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json({errors: errors.array() })
    }

    // extract email and password
    const { email, password } = req.body;

    try {
        // Check that registered user is unique
        let user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({msg: 'El usuario no existe'});
        }

        // Check password
        const correctPassword = await bcryptjs.compare(password, user.password);
        if(!correctPassword) {
            return res.status(400).json({msg: 'Contraseña Incorrecta' });
        }

        //ok
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
    }
}


// Get which user is authenticated
exports.userAuth = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json({user});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'});
    }
}