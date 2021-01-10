const UserService = require('../services/user-service');

class UserController {
    async create(req, res, next) {
        try {
            let user = req.body;
            const result = await UserService.create(user);
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
            const result = await UserService.findById(id);
            res.status(200).send(result);
        } catch (e) {
            next(new Error(e.message));
        }
    }

    async findByIdAndUpdate(req, res, next) {
        try {
            const id = req.params.id;
            let user = req.body;
            user = await UserService.findByIdAndUpdate(id, user);
            res.status(200).send(user);
        } catch (e) {
            next(new Error(e.message));
        }
    }

    async delete(req, res, next) {
        try {
            const id = req.params.id;
            const result = await UserService.delete(id);
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
            const results = await UserService.find(query, options);
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

module.exports = new UserController();
