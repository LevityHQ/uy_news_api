const bcrypt = require('bcrypt');

class PasswordService{
    async hashPassword(passowrd){
        const saltRounds = 10;
        return await bcrypt.hash(passowrd, saltRounds);
    }

    async comparePasswords(password, passwordHash){
        return await bcrypt.compare(password, passwordHash);
    }
}

module.exports = new PasswordService();
