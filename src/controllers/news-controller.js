const NewsService = require('../services/news-service');

class NewsController {
    async create(req, res, next) {
        try {
            let news = req.body;
            const result = await NewsService.create(news);
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
            const result = await NewsService.findById(id);
            res.status(200).send(result);
        } catch (e) {
            next(new Error(e.message));
        }
    }

    async findByIdAndUpdate(req, res, next) {
        try {
            const id = req.params.id;
            let news = req.body;
            news = await NewsService.findByIdAndUpdate(id, news);
            res.status(200).send(news);
        } catch (e) {
            next(new Error(e.message));
        }
    }

    async delete(req, res, next) {
        try {
            const id = req.params.id;
            const result = await NewsService.delete(id);
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
            const results = await NewsService.find(query, options);
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

module.exports = new NewsController();
