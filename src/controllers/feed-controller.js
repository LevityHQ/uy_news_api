const FeedService = require('../services/feed-service');

class FeedController {
    async create(req, res, next) {
        try {
            let feed = req.body;
            const result = await FeedService.create(feed);
            res.status(201).send(result);
        } catch (e) {
            next(new Error(e.message));
        }
    }

    async findById(req, res, next) {
        try {
            const {
                id
            } = req.params;
            const result = await FeedService.findById(id);
            res.status(200).send(result);
        } catch (e) {
            next(new Error(e.message));
        }
    }

    async findByIdAndUpdate(req, res, next) {
        try {
            const id = req.params.id;
            let feed = req.body;
            feed = await FeedService.findByIdAndUpdate(id, feed);
            res.status(200).send(feed);
        } catch (e) {
            next(new Error(e.message));
        }
    }

    async delete(req, res, next) {
        try {
            const id = req.params.id;
            const result = await FeedService.delete(id);
            res.status(200).send(result);
        } catch (e) {
            next(new Error(e.message));
        }
    }

    async find(req, res, next) {
        try {
            const {
                query,
                options
            } = req.body;
            const results = await FeedService.find(query, options);
            let result = {};
            result.data = results.docs;
            delete results.docs;
            result.pagination = {
                ...results
            };
            res.status(200).send(result);
        } catch (e) {
            next(new Error(e.message));
        }
    }
}

module.exports = new FeedController();
