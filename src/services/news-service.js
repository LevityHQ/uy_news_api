const NewsModel = require('../models/news-model');
const { logger } = require('../../util/logger');

class NewsService {
    async create(news) {
        try {
            const newsModel = new NewsModel(news);
            return await newsModel.save();
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    async findById(id) {
        try {
            return await NewsModel.findById(id).exec();
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    async findByIdAndUpdate(id, news) {
        try {
            const filter = {
                _id: id
            };
            return await NewsModel.findOneAndUpdate(filter, news, {
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
            return await NewsModel.deleteOne(filter);
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    async find(query, options) {
        try {
            return await NewsModel.paginate(query, options);
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }
}

module.exports = new NewsService();
