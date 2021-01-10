const UserService = require('../services/user-service');
const { logger } = require('../../util/logger');

class UserController {
    async create(User) {
        try {
            return await UserService.create(User);
        } catch (e) {
            logger.error(e.message);
            logger.error(e.stack);
        }
    }

    async findById(id) {
        try {
            return await UserService.findById(id);
        } catch (e) {
            logger.error(e.message);
            logger.error(e.stack);
        }
    }

    async findByIdAndUpdate(id, User) {
        try {
            return await UserService.findByIdAndUpdate(id, User);
        } catch (e) {
            logger.error(e.message);
            logger.error(e.stack);
        }
    }

    async delete(id) {
        try {
            return await UserService.delete(id);
        } catch (e) {
            logger.error(e.message);
            logger.error(e.stack);
        }
    }

    async find(query, options) {
        try {
            const results = await UserService.find(query, options);
            let result = {};
            result.data = results.docs;
            delete results.docs;
            result.pagination = {
                ...results
            };
            return result;
        } catch (e) {
            logger.error(e.message);
            logger.error(e.stack);
        }
    }
}

module.exports = new UserController();
