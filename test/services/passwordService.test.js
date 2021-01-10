const PasswordService = require('../../src/services/password-service');

describe('Password Service', () => {
    it('Hashes a password', async () => {
        const hash = await PasswordService.hashPassword('test');
        const equal = await PasswordService.comparePasswords('test', hash);
        expect(equal).toBeTruthy();
    });

    it('Compare a Password', async () => {
        const equal = await PasswordService.comparePasswords('test1!', '$2b$10$zRaaXiwKwQF6Fa7iLzWOBOTfBls1VBQJwDGGgHagzwFqJKTFwFheS');
        expect(equal).toBeTruthy();
    });
});
