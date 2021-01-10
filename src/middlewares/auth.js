const JWTService = require('../services/jwt-service');
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(JWTService.verify(token)){
            next();
        }
    } catch {
        res.status(401).json({
            error: 'Invalid request!'
        });
    }
};
