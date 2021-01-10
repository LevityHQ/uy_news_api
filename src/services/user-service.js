const UserModel = require('../models/user-model');
const { logger } = require('../../util/logger');

class UserService {
    async create(User) {
        try {
            const userModel = new UserModel(User);
            return await userModel.save();
        } catch (e) {
            logger.error(e);
        }
    }

    async findById(id) {
        try {
            return await UserModel.findById(id).exec();
        } catch (e) {
            logger.error(e);
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
        }
    }

    async find(query, options) {
        try {
            return await UserModel.paginate(query, options);
        } catch (e) {
            logger.error(e);
        }
    }
}

module.exports = new UserService();