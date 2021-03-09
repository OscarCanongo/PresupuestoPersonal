const Operation = require('../models/Operation');

exports.getAllOperations = async (req, res) => {
    const userId = req.user.id;
    const operations = await Operation.findAll({
        where: { userId }
    });
    res.json({operations});
}