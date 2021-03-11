const Operation = require('../models/Operation');

exports.getAllOperations = async (req, res) => {
    const userId = req.user.id;
    const operations = await Operation.findAll({
        where: { userId }
    });
    res.json({operations});
}

exports.getBalance = async (req, res) => {
    const userId = req.user.id;
    const result = await Operation.sum('monto', {
        where: { userId }
    });
    res.json({result});
}