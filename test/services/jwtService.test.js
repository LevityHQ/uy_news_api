require('dotenv').config();
const JWTService = require('../../src/services/jwt-service');
const UserModel = require('../../src/models/user-model');

describe('JWT Service', () => {
    it('Build a JWT for the user passed a parameter', async () => {
        process.env.SECRET = 'unit_test_secret';
        require('dotenv').config();
        const jwt = JWTService.build(new UserModel({ email: 'test@test.com', role: 'admin'}));
        expect(jwt).not.toBeNull();
        const verification = JWTService.verify(jwt);
        expect(verification).toBeTruthy();
    });
});
