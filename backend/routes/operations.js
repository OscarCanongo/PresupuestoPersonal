const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const operationController = require('../controllers/operationController');
const { check } = require('express-validator');

// Get all operations
router.get('/', 
    auth,
    operationController.getAllOperations
)

// Get balance
router.get('/balance', 
    auth,
    operationController.getBalance 
)

//Post operations
router.post('/', 
    auth,
    [
        check('concepto', 'El concepto de la operación es obligatorio').not().isEmpty(),
        check('monto', 'El monto de la operación es obligatorio').not().isEmpty(),
        check('tipo', 'El tipo de operación es obligatorio').not().isEmpty(),
        check('categoria', 'La categoria de la operación es obligatorio').not().isEmpty()
    ],
    operationController.postOperaciones
);

//Update operations
router.put('/:id', 
    auth,
    [
        check('concepto', 'El concepto de la operación es obligatorio').not().isEmpty(),
        check('monto', 'El monto de la operación es obligatorio').not().isEmpty(),
        check('tipo', 'El tipo de operación es obligatorio').not().isEmpty(),
        check('categoria', 'La categoria de la operación es obligatorio').not().isEmpty()
    ],
    operationController.updateOperacion
);

// Delete operation
router.delete('/:id', 
    auth,
    operationController.deleteOperation
);

module.exports = router;