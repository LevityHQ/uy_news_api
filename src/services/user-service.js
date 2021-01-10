const UserModel = require('../models/user-model');
const { logger } = require('../../util/logger');
const PasswordService = require('./password-service');

class UserService {
    async create(user) {
        try {
            user.password = await PasswordService.hashPassword(user.password);
            const userModel = new UserModel(user);
            return await userModel.save();
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    async findById(id) {
        try {
            return await UserModel.findById(id).exec();
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    async findByIdAndUpdate(id, user) {
        try {
            const filter = {
                _id: id
            };
            return await UserModel.findOneAndUpdate(filter, user, {
                new: true
            });
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    async delete(id) {
        try {
            const filter = {
                _id: id
            };
            return await UserModel.deleteOne(filter);
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    async findUserByEmail(email) {
        const query = {'email': email};
        try{
            return await UserModel.findOne(query);
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    async find(query, options) {
        try {
            return await UserModel.paginate(query, options);
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }
}

module.exports = new UserService();
