const logger = require('../../util/logger');
const UserController = require('../controller/user-controller');

module.exports = function (app) {
    app.get('/user/:id', async (req, res) => {
        try {
            const {
                id
            } = req.params;
            const user = await UserController.findById(id);
            res.status(200).send(user);
        } catch (e) {
            logger.error(e);
            res.status(500).send(e);
        }
    });

    app.post('/user', async (req, res) => {
        try {
            let user = req.body;
            user = await UserController.create(user);
            res.status(200).send(user);
        } catch (e) {
            logger.error(e);
            res.status(500).send(e);
        }
    });

    app.put('/user/:id', async (req, res) => {
        try {
            const id = req.params.id;
            let user = req.body;
            user = await UserController.findByIdAndUpdate(id, user);
            res.status(200).send(user);
        } catch (e) {
            logger.error(e);
            res.status(500).send(e);
        }
    });

    app.delete('/user/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const result = await UserController.delete(id);
            res.status(200).send(result);
        } catch (e) {
            logger.error(e);
            res.status(500).send(e);
        }
    });

    app.post('/user/find', async (req, res) => {
        try {
            const {
                query,
                options
            } = req.body;
            const users = await UserController.find(query, options);
            res.status(200).send(users);
        } catch (e) {
            logger.error(e);
            res.status(500).send(e);
        }
    });
};