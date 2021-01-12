const FeedModel = require('../models/feed-model');
const { logger } = require('../../util/logger');

class FeedService {
    async create(feed) {
        try {
            const feedModel = new FeedModel(feed);
            return await feedModel.save();
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    async findById(id) {
        try {
            return await FeedModel.findById(id).exec();
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    async findByIdAndUpdate(id, feed) {
        try {
            const filter = {
                _id: id
            };
            return await FeedModel.findOneAndUpdate(filter, feed, {
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
            return await FeedModel.deleteOne(filter);
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    async find(query, options) {
        try {
            return await FeedModel.paginate(query, options);
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }
}

module.exports = new FeedService();
