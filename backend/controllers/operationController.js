const Operation = require('../models/Operation');
const { validationResult } = require('express-validator');

//getOperations
exports.getAllOperations = async (req, res) => {
    const userId = req.user.id;
    const operations = await Operation.findAll({
        where: { userId },
        order: [
            ['createdAt','DESC']
        ]
    });
    res.json({operations});
}

//GetBalance
exports.getBalance = async (req, res) => {
    const userId = req.user.id;
    const result = await Operation.sum('monto', {
        where: { userId }
    });
    res.json({result});
}

//PostOperaciones
exports.postOperaciones = async (req, res) => {

    // check for errors 
    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json({errors: errors.array() })
    }

    try {
        //Create a new operation
        const operation = new Operation(req.body);

        //Save the user
        operation.userId = req.user.id;

        //save operation
        await operation.save();
        res.json(operation);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

//UpdateOperacion
exports.updateOperacion = async (req, res) => {

    // check for errors
    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json({errors: errors.array() })
    }

    // get operation info 
    const { concepto, tipo, monto, createdAt} = req.body;
    
    try {

        // check id  
        let operation = await Operation.findByPk(req.params.id);

        // operation exists? 
        if(!operation) {
            return res.status(404).json({msg: 'Operación no encontrada'})
        }

        // check user 
        if(operation.userId !== req.user.id ) {
            return res.status(401).json({msg: 'No Autorizado'});
        }

        // update
        await Operation.update(
            {
                concepto,
                tipo,
                monto,
                createdAt
            },
            { 
                where: {id: req.params.id}
            }
        );

        res.json({msg: "Operacion actualizada correctamente"});

    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
}

// Delete operation
exports.deleteOperation = async (req, res ) => {
    try {
        // check id  
        let operation = await Operation.findByPk(req.params.id);

        // operation exists? 
        if(!operation) {
            return res.status(404).json({msg: 'Operación no encontrada'})
        }

        // check user 
        if(operation.userId !== req.user.id ) {
            return res.status(401).json({msg: 'No Autorizado'});
        }

        // delete operation
        await Operation.destroy({
            where: { id: req.params.id }
        });
        res.json({ msg: 'Operación eliminada correctamente'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor')
    }
}