const UserService = require('../services/user-service');
const PasswordService = require('../services/password-service');
const JWTService = require('../services/jwt-service');

class AuthController {
    async login(req, res, next){
        try{
            const { email, password } = req.body;
            const user = await UserService.findUserByEmail(email);
            delete user.password;
            let operation;
            if (await PasswordService.comparePasswords(password, user.password)){
                const jwt = await JWTService.build(user);
                operation = { auth_token: `Bearer ${jwt}`};
            }else{
                operation = { error: 'Invalid Credentials!.' };
            }

            res.status(200).send(operation);
        } catch (e) {
            next(new Error(e.message));
        }
    }
}

module.exports = new AuthController();
