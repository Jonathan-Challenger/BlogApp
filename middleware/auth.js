const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    // Get token from req header
    const token = req.header('x-auth-token');

    // Check if token missing
    if (!token) {
        return res.status(401).json({ msg: 'No token, Authorisation denied' });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        next();
    } catch(e) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}