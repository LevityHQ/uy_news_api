const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

class JWTService {
    build(user) {
        const payload = {
            email : user.email,
            role: user.role
        };
        return jwt.sign({
            data: payload
        }, secret, { expiresIn: '3h' });
    }

    verify(token){
        return jwt.verify(token, secret);
    }
}

module.exports = new JWTService();
