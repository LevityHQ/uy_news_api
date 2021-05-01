const bcrypt = require('bcrypt');

class PasswordService{
    async hashPassword(password){
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    }

    async comparePasswords(password, passwordHash){
        return await bcrypt.compare(password, passwordHash);
    }
}

module.exports = new PasswordService();
